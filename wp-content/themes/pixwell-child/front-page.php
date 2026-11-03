<?php
get_header();

$latest_query = new WP_Query( [
	'posts_per_page'      => 4,
	'ignore_sticky_posts' => true,
] );
$category_groups = [
	[ 'ai' ],
	[ 'tech' ],
	[ 'startups' ],
	[ 'fintech-ecommerce' ],
	[ 'events' ],
	[ 'leaks' ],
	[ 'launched' ],
	[ 'isp-telecom', 'government-policy' ],
	[ 'deals', 'best-of' ],
	[ 'reviews' ],
];

$render_story = static function ( $post_id, $class = '', $high_priority = false ) {
	$post = get_post( $post_id );
	if ( ! $post ) {
		return;
	}
	$categories = get_the_category( $post_id );
	$category   = ! empty( $categories ) ? $categories[0] : null;
	$author     = get_the_author_meta( 'display_name', $post->post_author );
	?>
	<article class="tnw-story <?php echo esc_attr( $class ); ?>">
		<a class="tnw-story__image" href="<?php echo esc_url( get_permalink( $post_id ) ); ?>" tabindex="-1" aria-hidden="true">
			<?php if ( has_post_thumbnail( $post_id ) ) : ?>
				<?php
				$image_attributes = [
					'loading'  => 'lazy',
					'decoding' => 'async',
				];
				if ( 'tnw-story--lead' === $class || $high_priority ) {
					$image_attributes['loading']       = 'eager';
					$image_attributes['fetchpriority'] = 'high';
				}
				echo get_the_post_thumbnail( $post_id, 'large', $image_attributes );
				?>
			<?php else : ?>
				<span class="tnw-story__image-placeholder"></span>
			<?php endif; ?>
		</a>
		<div class="tnw-story__copy">
			<?php if ( $category ) : ?>
				<a class="tnw-eyebrow" href="<?php echo esc_url( get_category_link( $category->term_id ) ); ?>"><?php echo esc_html( $category->name ); ?></a>
			<?php endif; ?>
			<h2><a href="<?php echo esc_url( get_permalink( $post_id ) ); ?>"><?php echo esc_html( get_the_title( $post_id ) ); ?></a></h2>
			<?php if ( 'tnw-story--lead' === $class ) : ?>
				<p><?php echo esc_html( wp_trim_words( get_the_excerpt( $post_id ), 24 ) ); ?></p>
			<?php elseif ( 'tnw-story--latest' === $class ) : ?>
				<p><?php echo esc_html( wp_trim_words( get_the_excerpt( $post_id ), 18 ) ); ?></p>
			<?php endif; ?>
			<div class="tnw-story__meta">
				<?php if ( 'tnw-story--latest' === $class ) : ?>
					<span><?php echo esc_html( sprintf( __( 'By %s', 'pixwell-child' ), $author ) ); ?></span>
					<time datetime="<?php echo esc_attr( get_the_date( 'c', $post_id ) ); ?>"><?php echo esc_html( get_the_date( '', $post_id ) ); ?></time>
				<?php else : ?>
					<?php echo esc_html( get_the_date( '', $post_id ) ); ?>
				<?php endif; ?>
			</div>
		</div>
	</article>
	<?php
};

$render_category = static function ( $slug ) use ( $render_story, $latest_query ) {
	$category = get_category_by_slug( $slug );
	if ( ! $category || ! $category->count ) {
		return false;
	}
	$category_query = new WP_Query( [
		'posts_per_page'      => 2,
		'category_name'       => $slug,
		'post__not_in'        => wp_list_pluck( $latest_query->posts, 'ID' ),
		'ignore_sticky_posts' => true,
	] );
	if ( ! $category_query->have_posts() ) {
		return false;
	}
	$category_label = wp_specialchars_decode( $category->name, ENT_QUOTES );
	?>
	<section class="tnw-category-section" aria-labelledby="tnw-section-<?php echo esc_attr( $category->slug ); ?>">
		<header class="tnw-section-heading tnw-section-heading--row">
			<div>
				<p class="tnw-kicker">Explore</p>
				<h2 id="tnw-section-<?php echo esc_attr( $category->slug ); ?>"><?php echo esc_html( $category_label ); ?></h2>
			</div>
			<a class="tnw-more" href="<?php echo esc_url( get_category_link( $category->term_id ) ); ?>">All <?php echo esc_html( $category_label ); ?><span aria-hidden="true">↗</span></a>
		</header>
		<div class="tnw-category-grid">
			<?php foreach ( $category_query->posts as $category_post ) : ?>
				<?php $render_story( $category_post->ID, 'tnw-story--category' ); ?>
			<?php endforeach; ?>
		</div>
	</section>
	<?php
	return true;
};
?>

<main class="site-content tnw-home">
	<div class="tnw-shell">
		<section class="tnw-masthead" aria-labelledby="tnw-home-title">
			<div>
				<p class="tnw-kicker">The future, in focus</p>
				<h1 id="tnw-home-title">Technology<br><span>moves us.</span></h1>
			</div>
			<p class="tnw-masthead__dek">The latest stories shaping technology, business, and what comes next.</p>
		</section>

		<section class="tnw-latest" aria-labelledby="tnw-latest-title">
			<header class="tnw-section-heading">
				<p class="tnw-kicker">Stay informed</p>
				<h2 id="tnw-latest-title">Latest News</h2>
			</header>
			<div class="tnw-latest-grid">
				<?php foreach ( $latest_query->posts as $index => $latest_post ) : ?>
					<?php $render_story( $latest_post->ID, 'tnw-story--latest', 0 === $index ); ?>
				<?php endforeach; ?>
			</div>
		</section>

		<?php foreach ( $category_groups as $category_group ) : ?>
			<?php if ( count( $category_group ) > 1 ) : ?>
				<div class="tnw-category-pair">
					<?php foreach ( $category_group as $category_slug ) : ?>
						<?php $render_category( $category_slug ); ?>
					<?php endforeach; ?>
				</div>
			<?php else : ?>
				<?php $render_category( $category_group[0] ); ?>
			<?php endif; ?>
		<?php endforeach; ?>
	</div>
</main>

<?php
wp_reset_postdata();
get_footer();