/**
 * BLOCK: wp-bootstrap-blocks/column
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';

import edit, { bgColorOptions } from './edit';
import { column } from '../icons';
import { select } from '@wordpress/data';
import { getColorObjectByAttributeValues } from "@wordpress/block-editor";

const { InnerBlocks } = BlockEditor || Editor; // Fallback to deprecated '@wordpress/editor' for backwards compatibility

registerBlockType( 'wp-bootstrap-blocks/column', {
	apiVersion: 3,
	editorStyle: 'wp-bootstrap-blocks-editor-styles', // Required for CSS to load inside iframe in WP 6.8+
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Column', 'wp-bootstrap-blocks' ), // Block title.
	icon: column, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'wp-bootstrap-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Column', 'wp-bootstrap-blocks' ),
		__( 'Bootstrap Column', 'wp-bootstrap-blocks' ),
		__( 'Bootstrap', 'wp-bootstrap-blocks' ),
	],
	parent: [ 'wp-bootstrap-blocks/row' ],

	// attributes are defined server side with register_block_type(). This is needed to make default attributes available in the blocks render callback.

	getEditWrapperProps( attributes ) {
		const {
			sizeXxl,
			sizeXl,
			sizeLg,
			sizeMd,
			sizeSm,
			sizeXs,
			equalWidthXxl,
			equalWidthXl,
			equalWidthLg,
			equalWidthMd,
			equalWidthSm,
			equalWidthXs,
			bgColor,
			padding,
			centerContent,
			verticalCenter,
		} = attributes;

		// Prepare styles for selected background-color
		// Humanists UK Edit: get pallette colours from editor settings
		let style = {};
		if ( bgColor ) {
			const settings = select( 'core/editor' ).getEditorSettings();
			const colorObject = getColorObjectByAttributeValues(
				settings.colors,
				bgColor
			);
			if ( colorObject ) {
				style = {
					backgroundColor: colorObject.color,
				};
			}
		}

		return {
			'data-size-xs':
				equalWidthXxl ||
				equalWidthXl ||
				equalWidthLg ||
				equalWidthMd ||
				equalWidthSm ||
				equalWidthXs
					? 0
					: sizeXs,
			'data-size-sm':
				equalWidthXxl ||
				equalWidthXl ||
				equalWidthLg ||
				equalWidthMd ||
				equalWidthSm
					? 0
					: sizeSm,
			'data-size-md':
				equalWidthXxl || equalWidthXl || equalWidthLg || equalWidthMd
					? 0
					: sizeMd,
			'data-size-lg':
				equalWidthXxl || equalWidthXl || equalWidthLg ? 0 : sizeLg,
			'data-size-xl': equalWidthXxl || equalWidthXl ? 0 : sizeXl,
			'data-size-xxl': equalWidthXxl ? 0 : sizeXxl,
			'data-bg-color': bgColor,
			'data-padding': padding,
			'data-center-content': centerContent,
			'data-vertical-center': verticalCenter,
			style,
		};
	},

	edit,

	save() {
		return <InnerBlocks.Content />;
	},
} );
