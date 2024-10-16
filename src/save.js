
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';

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

	var targetAttrib = "";
	if (attributes.openNewWindow) {
		targetAttrib = "_blank";
	}

	if ( attributes.blockUrl !== '') {
		return (
			<a href={attributes.blockUrl} target={targetAttrib}>
				<div { ...useBlockProps.save() } id={ attributes.blockID }>
					<div className="bg_img" style={bgStyle}></div>
					<div class="wrapper">
						<InnerBlocks.Content />
					</div>
				</div>
			</a>
		);
	} else {

		return (
			<div { ...useBlockProps.save() } id={ attributes.blockID }>
				<div className="bg_img" style={bgStyle}></div>
				<div class="wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
}
