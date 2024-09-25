/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps, InspectorControls, MediaPlaceholder } from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	TextControl,
    Button,
} from "@wordpress/components";


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function editBlock( props ) {
	// This returns the HTML to the back-end
	const blockProps = useBlockProps( );
	
	const { attributes, setAttributes } = props;

	// Use array destructuring of the attributes
	//var { bgImage, beforeImage, afterImage } = attributes;
	//attributes({ blockID: '' });

	var bgStyle = {
		backgroundImage: 'url(' + attributes.imageUrl + ')',
	};

    const clearBackground = () => {
        setAttributes( { imageUrl: '', imageId: 0 } );
    };

	return (
		<div>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={true}>
					<PanelRow>
					<TextControl
						label="Block Anchor ID"
						onChange={ ( blockID ) => setAttributes( { blockID } ) }
						value={ attributes.blockID }
					/>
					</PanelRow>
					<PanelRow>
						<MediaPlaceholder
							onSelect = {
								( image ) => {
									setAttributes( { imageUrl: image.url, imageId: image.id } );
								}
							}
							allowedTypes = { [ 'image' ] }
							multiple = { false }
							labels = { { title: 'Background Image' } }
						>
						</MediaPlaceholder>
					</PanelRow>

                    <PanelRow>
						<Button isDestructive onClick={clearBackground}>Clear Background Image</Button>
					</PanelRow>

				</PanelBody>
			</InspectorControls>


			<div { ...blockProps } >
				<div className="bg_img" style={bgStyle} ></div>
                <div class="wrapper">
				    <InnerBlocks />
                </div>
			</div>
		</div>
	);

}
