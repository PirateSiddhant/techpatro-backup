<?php
/* pixwell child theme */

add_filter( 'xmlrpc_enabled', '__return_false' );

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