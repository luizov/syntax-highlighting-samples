<?php
/**
 * File comment.
 *
 * @package Somepackage
 */

namespace Location\Web;

require_once 'Zend/Uri/Http.php';

interface Factory {

	/**
	 * Function comment.
	 */
	public static function factory();
}

$heredoc = <<< HEREDOC_ID
some $contents
HEREDOC_ID;

/**
 * Sample function
 */
function foo() {
	$a = array( 0, 1, 2 );
	return SomeClass::$shared;
}


/**
 * Sample class
 */
class SomeClass extends One implements Another {
	private $my;
	public static $shared;
	const CONSTANT = 1987654321;

	/**
	 * Description by <a href="mailto:">user@host.dom</a>
	 *
	 * @property $magic
	 * @return SomeType
	 * @param $abc $abc Parameter1.
	 * @param $def $def Parameter2.
	 */
	function doSmth( $abc, $def ) {
		foo();
		$def .= self::magic;
		$def .= self::CONSTANT;
		$v    = Helper::convert( $abc . "\n {$def}" . $$def );
		$q    = new Query( $this->invent( abs( 0x80 ) ) );
		return array( $v => $q->result );
	}
}

require dirname( __FILE__ ) . 'inc.php';
`rm -r`;

goto Label;

Label:;


