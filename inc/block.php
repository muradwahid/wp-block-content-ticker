<?php
class CTTKHelloBlock
{
	public function __construct()
	{
		add_action('init', [$this, 'onInit']);
	}
	function onInit()
	{
		wp_register_style('content-ticker-content-ticker-style', CTTK_DIR_URL . 'dist/style.css', [], CTTK_VERSION); // Style
		wp_register_style('content-ticker-content-ticker-editor-style', CTTK_DIR_URL . 'dist/editor.css', ['content-ticker-content-ticker-style'], CTTK_VERSION); // Backend Style

		register_block_type(__DIR__, [
			'editor_style' => 'content-ticker-content-ticker-editor-style',
			'render_callback' => [$this, 'render']
		]); // Register Block

		wp_set_script_translations('content-ticker-content-ticker-editor-script', 'content-ticker', CTTK_DIR_PATH . 'languages');
	}

	function render($attributes)
	{
		extract($attributes);

		wp_enqueue_style('content-ticker-content-ticker-style');
		wp_enqueue_script('content-ticker-content-ticker-script', CTTK_DIR_URL . 'dist/script.js', ['react', 'react-dom'], CTTK_VERSION, true);
		wp_set_script_translations('content-ticker-content-ticker-script', 'content-ticker', CTTK_DIR_PATH . 'languages');

		$className = $className ?? '';
		$blockClassName = "wp-block-content-ticker-content-ticker $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr($blockClassName); ?>' id='cttk-content-ticker-<?php echo esc_attr($cId) ?>'
			data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>

		<?php return ob_get_clean();
	}
}
new CTTKHelloBlock();
require_once("ExtendMime.php");