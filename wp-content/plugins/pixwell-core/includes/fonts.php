<?php
/** Don't load directly */
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'Pixwell_Fonts_Enqueued', false ) ) {
	class Pixwell_Fonts_Enqueued {

		private static $instance;

		public $settings;

		// Cache key for storing generated CSS
		private static $cache_key = 'pixwell_lfontsup_css';

		/**
		 * Returns the singleton instance of the class.
		 *
		 * @return Pixwell_Fonts_Enqueued
		 */
		public static function get_instance() {

			if ( self::$instance === null ) {
				return new self();
			}

			return self::$instance;
		}

		/**
		 * Pixwell_Fonts_Enqueued constructor.
		 * Initializes hooks for font handling.
		 */
		function __construct() {

			self::$instance = $this;

			add_action( 'wp_head', [ $this, 'generate_local_font_faces' ], 20 );
		}

		/**
		 * Generates and enqueues @font-face CSS rules for locally uploaded fonts.
		 *
		 * This function retrieves font settings and font file variants from the database,
		 * then generates the necessary @font-face rules based on the uploaded font files.
		 *
		 * @return void
		 */
		public function generate_local_font_faces() {

			if ( ! defined( 'LOCAL_FONTS_UPLOADER_VERSION' ) ) {
				return;
			}

			$cached_css = get_option( self::$cache_key, '' );

			if ( ! empty( $cached_css ) ) {
				if ( 'unset' !== $cached_css ) {
					echo "<style id='local-fonts-uploader-inline'>\n{$cached_css}\n</style>\n";
				}

				return;
			}

			global $wpdb;
			$settings         = pixwell_get_option();
			$font_families    = [];
			$output_font_face = '';

			// Retrieve font variants from the database
			$table_name = $wpdb->prefix . 'lfontsup_variants';

			// Check if the table exists
			if ( $wpdb->get_var( $wpdb->prepare( "SHOW TABLES LIKE %s", $table_name ) ) === null ) {
				return;
			}

			$uploader_variants = $wpdb->get_results(  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
				"SELECT font_name, variant, file_url, assign_to FROM {$table_name}",
				ARRAY_A
			);

			if ( empty( $uploader_variants ) ) {
				return;
			}

			// Collect unique font-family names from settings
			foreach ( $settings as $id => $field ) {
				if ( isset( $field['font-family'] ) ) {
					$font_families[] = $field['font-family'];
				}
			}
			$font_families = array_unique( $font_families );

			// Generate @font-face rules for each font
			foreach ( $font_families as $font_name ) {
				foreach ( $uploader_variants as $variant ) {

					if ( $variant['font_name'] === $font_name && empty( $variant['assign_to'] ) ) {
						// Extract font-weight and font-style from variant value
						$font_weight = preg_replace( '/[^0-9]/', '', $variant['variant'] );
						$font_style  = ( strpos( $variant['variant'], 'italic' ) !== false ) ? 'italic' : 'normal';
						$file_ext    = pathinfo( $variant['file_url'], PATHINFO_EXTENSION );

						$output_font_face .= "@font-face {\n";
						$output_font_face .= "    font-family: '{$font_name}';\n";
						$output_font_face .= "    font-weight: {$font_weight};\n";
						$output_font_face .= "    font-style: {$font_style};\n";
						$output_font_face .= "    src: url('{$variant['file_url']}') format('{$this->get_font_format($file_ext)}');\n";
						$output_font_face .= "    font-display: swap;\n";
						$output_font_face .= "}\n";
					}
				}
			}

			if ( ! empty( $output_font_face ) ) {
				echo "<style id='local-fonts-uploader-inline'>\n{$output_font_face}\n</style>\n";
			} else {
				$output_font_face = 'unset';
			}

			update_option( self::$cache_key, $output_font_face );
		}

		/**
		 * Returns the correct font format for a given file extension.
		 *
		 * @param string $file_ext The file extension of the font file.
		 *
		 * @return string The corresponding CSS font format.
		 */
		public function get_font_format( $file_ext ) {

			$font_formats = [
				'woff2' => 'woff2',
				'woff'  => 'woff',
				'ttf'   => 'truetype',
				'otf'   => 'opentype',
				'eot'   => 'embedded-opentype',
			];

			return ! empty( $font_formats[ $file_ext ] ) ? $font_formats[ $file_ext ] : 'woff2';
		}
	}
}

/* LOAD */
Pixwell_Fonts_Enqueued::get_instance();

