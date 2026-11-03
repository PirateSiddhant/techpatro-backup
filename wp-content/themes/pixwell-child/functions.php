<?php
/* pixwell child theme */

add_filter( 'xmlrpc_enabled', '__return_false' );

add_action( 'Yoast\WP\SEO\register_robots_rules', static function ( $robots_txt_helper ) {
	if ( ! is_object( $robots_txt_helper ) || ! method_exists( $robots_txt_helper, 'add_allow' ) ) {
		return;
	}

	$robots_txt_helper->add_allow( '*', '/wp-content/uploads/' );
	foreach ( [ 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Claude-SearchBot' ] as $user_agent ) {
		$robots_txt_helper->add_allow( $user_agent, '/' );
	}
} );

add_action( 'wp_enqueue_scripts', 'pixwell_child_optimize_home_scripts', 100 );

function pixwell_child_optimize_home_scripts() {
	if ( ! is_front_page() ) {
		return;
	}

	$scripts = wp_scripts();
	if ( isset( $scripts->registered['pixwell-global'] ) ) {
		$global_script = $scripts->registered['pixwell-global'];
		$global_script->deps = array_values( array_diff( $global_script->deps, [ 'jquery-isotope' ] ) );
	}
}