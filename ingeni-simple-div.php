<?php
/**
 * Plugin Name:       Ingeni Simple Div
 * Description:       A Gutenberg block for creating simple, plain-vanilla, divs.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           2024.1.0
 * Author:            Bruce McKinnon - ingeni.net
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ingeni-simple-div
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ingeni_simple_div_ingeni_simple_div_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'ingeni_simple_div_ingeni_simple_div_block_init' );
