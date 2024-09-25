
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function saveBlock( props ) {

	const { attributes } = props;

	// Use array destructuring of the attributes
	//const { bgImage, beforeImage, afterImage, blockID } = attributes;
	//attributes({ blockID: '' });

	var bgStyle = {
		backgroundImage: 'url(' + attributes.imageUrl + ')',
	  };

	return (
		<div { ...useBlockProps.save() } id={ attributes.blockID }>
			<div className="bg_img" style={bgStyle}></div>
            <div class="wrapper">
                <InnerBlocks.Content />
            </div>
		</div>
	);
}
