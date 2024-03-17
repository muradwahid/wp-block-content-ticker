<?php
/**
 * Plugin Name: Content Ticker
 * Description: Content Ticker will let you showcase your trending news.
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: content-ticker
 */

// ABS PATH
if (!defined('ABSPATH')) {
  exit;
}

// Constant
define('CTTK_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('CTTK_DIR_URL', plugin_dir_url(__FILE__));
define('CTTK_DIR_PATH', plugin_dir_path(__FILE__));



require_once CTTK_DIR_PATH . 'inc/block.php';