<?php
/** Don't load directly */
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'Pixwell_Admin_Font_Handler', false ) ) {
	class Pixwell_Admin_Font_Handler {

		private static $instance;

		public $settings;
		public $supported_headings;

		public static function get_instance() {

			if ( self::$instance === null ) {
				return new self();
			}

			return self::$instance;
		}

		function __construct() {

			self::$instance = $this;

			add_filter( 'redux/pixwell_theme_options/localize', [ $this, 'local_font_uploader_settings' ], 10, 1 );

			// Clean stylesheet caching when settings are updated
			add_action( 'update_option_pixwell_theme_options', [ $this, 'clean_stylesheet_caching' ], 20 );

		}

		/**
		 * Clears the local font uploader cache.
		 *
		 * This function is triggered when the option associated with PIXWELL_TOS_ID
		 * is updated. It ensures that outdated cached stylesheets and stored
		 * Google Fonts links are removed, preventing the use of stale data.
		 *
		 * @return void
		 */
		public function clean_stylesheet_caching() {

			// Delete cached local font CSS uploader data
			delete_option( 'pixwell_lfontsup_css' );

		}

		public function get_variant_name( $variant ) {

			switch ( $variant ) {
				case '100':
					return esc_html__( 'Light 100', 'pixwell-core' );
				case '300':
					return esc_html__( 'Book 300', 'pixwell-core' );
				case '400':
					return esc_html__( 'Normal 400', 'pixwell-core' );
				case '500':
					return esc_html__( 'Medium 500', 'pixwell-core' );
				case '600':
					return esc_html__( 'Semi-Bold 600', 'pixwell-core' );
				case '700':
					return esc_html__( 'Bold 700', 'pixwell-core' );
				case '800':
					return esc_html__( 'Extra-Bold 800', 'pixwell-core' );
				case '900':
					return esc_html__( 'Extra-Bold 900', 'pixwell-core' );
				case '100italic':
					return esc_html__( 'Light 100 Italic', 'pixwell-core' );
				case '300italic':
					return esc_html__( 'Book 300 Italic', 'pixwell-core' );
				case '400italic':
					return esc_html__( 'Normal 400 Italic', 'pixwell-core' );
				case '500italic':
					return esc_html__( 'Medium 500 Italic', 'pixwell-core' );
				case '600italic':
					return esc_html__( 'Semi-Bold 600 Italic', 'pixwell-core' );
				case '700italic':
					return esc_html__( 'Bold 700 Italic', 'pixwell-core' );
				case '800italic':
					return esc_html__( 'Extra-Bold 800 Italic', 'pixwell-core' );
				case '900italic':
					return esc_html__( 'Extra-Bold 900 Italic', 'pixwell-core' );
				default:
					return $variant;
			}
		}


		/**
		 * added the font uploader settings to Theem Options
		 *
		 * @param array $params The existing parameters for the font uploader.
		 *
		 * @return array The modified parameters including local fonts.
		 */
		public function local_font_uploader_settings( $params ) {

			if ( ! defined( 'LOCAL_FONTS_UPLOADER_VERSION' ) || ! class_exists( 'Local_Fonts_Uploader_Data' ) ) {
				return $params;
			}

			$fonts    = Local_Fonts_Uploader_Data::get_fonts();
			$children = [];

			if ( ! empty( $fonts ) && is_array( $fonts ) ) {
				foreach ( $fonts as $font ) {
					if ( ! empty( $font['name'] ) ) {
						$formatted_variants = $this->get_local_font_variants( $font['name'] );
						if ( ! empty( $formatted_variants ) ) {
							$children[] = [
								'id'          => $font['name'],
								'text'        => $font['name'],
								'subsets'     => 'custom',
								'data-google' => 'false',
								'variants'    => $formatted_variants,
							];
						}
					}
				}
			}

			$params['customfonts'] = [
				'text'     => esc_html__( 'Local Fonts Uploader', 'pixwell-core' ),
				'children' => $children,
			];

			return $params;
		}

		/**
		 * Retrieves the local font variants for a given font name.
		 *
		 * @param string $font_name The name of the font.
		 *
		 * @return array An associative array where keys are variant identifiers and values are their names.
		 */
		public function get_local_font_variants( $font_name ) {
			$data = [];

			// Fetch font variants
			$variants = Local_Fonts_Uploader_Data::get_variants( $font_name );

			// Ensure variants exist and are an array before processing
			if ( is_array( $variants ) && ! empty( $variants ) ) {
				foreach ( $variants as $variant ) {
					if ( ! empty( $variant['variant'] ) ) {
						$data[ $variant['variant'] ] = $this->get_variant_name( $variant['variant'] );
					}
				}
			}

			return $data;
		}
	}
}

/** load */
Pixwell_Admin_Font_Handler::get_instance();
