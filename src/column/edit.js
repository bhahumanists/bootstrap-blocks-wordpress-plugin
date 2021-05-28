// WordPress dependencies
import { __ } from '@wordpress/i18n';
import {
	CheckboxControl,
	ToggleControl,
	ColorPalette,
	PanelBody,
	RangeControl,
	SelectControl,
} from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { applyFilters } from '@wordpress/hooks';
import { withColors, PanelColorSettings } from "@wordpress/block-editor"; //not sure why * doesn't get it
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';

import { isBootstrap5Active } from '../helper';
import Edit from "../../../humanistsuk-gutenberg-blocks/src/button/edit";

const { InnerBlocks, InspectorControls } = BlockEditor || Editor; // Fallback to deprecated '@wordpress/editor' for backwards compatibility

const ColumnSizeRangeControl = ( {
	label,
	attributeName,
	value,
	setAttributes,
	...props
} ) => {
	return (
		<RangeControl
			label={ label }
			value={ value }
			onChange={ ( selectedSize ) => {
				setAttributes( {
					[ attributeName ]: selectedSize,
				} );
			} }
			min={ 0 }
			max={ 12 }
			{ ...props }
		/>
	);
};

let paddingOptions = [
	{ label: __( 'None', 'wp-bootstrap-blocks' ), value: '' },
	{ label: __( '1', 'wp-bootstrap-blocks' ), value: 'p-1' },
	{ label: __( '2', 'wp-bootstrap-blocks' ), value: 'p-2' },
	{ label: __( '3', 'wp-bootstrap-blocks' ), value: 'p-3' },
	{ label: __( '4', 'wp-bootstrap-blocks' ), value: 'p-4' },
	{ label: __( '5', 'wp-bootstrap-blocks' ), value: 'p-5' },
	{ label: __( '6', 'wp-bootstrap-blocks' ), value: 'p-6' },
	{ label: __( '7', 'wp-bootstrap-blocks' ), value: 'p-7' },
	{ label: __( '8', 'wp-bootstrap-blocks' ), value: 'p-8' },
	{ label: __( '9', 'wp-bootstrap-blocks' ), value: 'p-9' },
];

paddingOptions = applyFilters(
	'wpBootstrapBlocks.column.paddingOptions',
	paddingOptions
);

class BootstrapColumnEdit extends Component {
	render() {
		const {
			attributes,
			className,
			setAttributes,
			hasChildBlocks,
			bgColor,
			setBgColor,
		} = this.props;
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
			//bgColor,
			padding,
			centerContent,
		} = attributes;

		// If centerContent is enabled but no background-color is selected -> reset attribute
		if ( ! bgColor && centerContent ) {
			setAttributes( { centerContent: false } );
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Column size', 'wp-bootstrap-blocks' ) }
						initialOpen={ false }
					>
						<ColumnSizeRangeControl
							label={ __(
								'Xs Column count',
								'wp-bootstrap-blocks'
							) }
							attributeName="sizeXs"
							value={ sizeXs }
							disabled={ equalWidthXs }
							setAttributes={ setAttributes }
						/>
						<CheckboxControl
							label={ __(
								'Xs equal-width',
								'wp-bootstrap-blocks'
							) }
							checked={ equalWidthXs }
							onChange={ ( isChecked ) =>
								setAttributes( { equalWidthXs: isChecked } )
							}
						/>
						<hr />
						<ColumnSizeRangeControl
							label={ __(
								'Sm Column count',
								'wp-bootstrap-blocks'
							) }
							attributeName="sizeSm"
							value={ sizeSm }
							disabled={ equalWidthSm }
							setAttributes={ setAttributes }
						/>
						<CheckboxControl
							label={ __(
								'Sm equal-width',
								'wp-bootstrap-blocks'
							) }
							checked={ equalWidthSm }
							onChange={ ( isChecked ) =>
								setAttributes( { equalWidthSm: isChecked } )
							}
						/>
						<hr />
						<ColumnSizeRangeControl
							label={ __(
								'Md Column count',
								'wp-bootstrap-blocks'
							) }
							attributeName="sizeMd"
							value={ sizeMd }
							disabled={ equalWidthMd }
							setAttributes={ setAttributes }
						/>
						<CheckboxControl
							label={ __(
								'Md equal-width',
								'wp-bootstrap-blocks'
							) }
							checked={ equalWidthMd }
							onChange={ ( isChecked ) =>
								setAttributes( { equalWidthMd: isChecked } )
							}
						/>
						<hr />
						<ColumnSizeRangeControl
							label={ __(
								'Lg Column count',
								'wp-bootstrap-blocks'
							) }
							attributeName="sizeLg"
							value={ sizeLg }
							disabled={ equalWidthLg }
							setAttributes={ setAttributes }
						/>
						<CheckboxControl
							label={ __(
								'Lg equal-width',
								'wp-bootstrap-blocks'
							) }
							checked={ equalWidthLg }
							onChange={ ( isChecked ) =>
								setAttributes( { equalWidthLg: isChecked } )
							}
						/>
						<hr />
						<ColumnSizeRangeControl
							label={ __(
								'Xl Column count',
								'wp-bootstrap-blocks'
							) }
							attributeName="sizeXl"
							value={ sizeXl }
							disabled={ equalWidthXl }
							setAttributes={ setAttributes }
						/>
						<CheckboxControl
							label={ __(
								'Xl equal-width',
								'wp-bootstrap-blocks'
							) }
							checked={ equalWidthXl }
							onChange={ ( isChecked ) =>
								setAttributes( { equalWidthXl: isChecked } )
							}
						/>
						{ isBootstrap5Active() && (
							<Fragment>
								<hr />
								<ColumnSizeRangeControl
									label={ __(
										'Xxl Column count',
										'wp-bootstrap-blocks'
									) }
									attributeName="sizeXxl"
									value={ sizeXxl }
									disabled={ equalWidthXxl }
									setAttributes={ setAttributes }
								/>
								<CheckboxControl
									label={ __(
										'Xxl equal-width',
										'wp-bootstrap-blocks'
									) }
									checked={ equalWidthXxl }
									onChange={ ( isChecked ) =>
										setAttributes( {
											equalWidthXxl: isChecked,
										} )
									}
								/>
							</Fragment>
						) }
					</PanelBody>
					<PanelBody
						title={ __(
							'Background color',
							'wp-bootstrap-blocks'
						) }
						initialOpen={ false }
					>
						<PanelColorSettings
							title='Button Colour Options'
							colorSettings={[
								{
									value: bgColor.color,
									onChange: setBgColor,
									label: 'Background Colour'
								}
							] }
							disableCustomColors
						/>
						{/*<ColorPalette*/}
						{/*	colors={ bgColorOptions }*/}
						{/*	value={ bgColor }*/}
						{/*	onChange={ ( value ) => {*/}
						{/*		// Value is undefined if color gets cleared*/}
						{/*		if ( ! value ) {*/}
						{/*			setAttributes( {*/}
						{/*				bgColor: '',*/}
						{/*				centerContent: false,*/}
						{/*			} );*/}
						{/*		} else {*/}
						{/*			const selectedColor = bgColorOptions.find(*/}
						{/*				( c ) => c.color === value*/}
						{/*			);*/}
						{/*			if ( selectedColor ) {*/}
						{/*				setAttributes( {*/}
						{/*					bgColor: selectedColor.name,*/}
						{/*				} );*/}
						{/*			}*/}
						{/*		}*/}
						{/*	} }*/}
						{/*	disableCustomColors*/}
						{/*/>*/}
						{/*{ bgColor ? (*/}
						{/*	<CheckboxControl*/}
						{/*		label={ __(*/}
						{/*			'Center content vertically in row',*/}
						{/*			'wp-bootstrap-blocks'*/}
						{/*		) }*/}
						{/*		checked={ centerContent }*/}
						{/*		onChange={ ( isChecked ) =>*/}
						{/*			setAttributes( {*/}
						{/*				centerContent: isChecked,*/}
						{/*			} )*/}
						{/*		}*/}
						{/*		help={ __(*/}
						{/*			'This setting only applies if there is no vertical alignment set on the parent row block.',*/}
						{/*			'wp-bootstrap-blocks'*/}
						{/*		) }*/}
						{/*	/>*/}
						{/*) : null }*/}
					</PanelBody>
					<PanelBody
						title={ __(
							'Padding (inside column)',
							'wp-bootstrap-blocks'
						) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( 'Size', 'wp-bootstrap-blocks' ) }
							value={ padding }
							options={ paddingOptions }
							onChange={ ( value ) => {
								setAttributes( {
									padding: value,
								} );
							} }
						/>
					</PanelBody>
					<PanelBody
						title={ __(
							'Vertical align (inside column)',
							'wp-bootstrap-blocks'
						) }
						initialOpen={ false }
					>
						<ToggleControl
							label="Vertically centre content?"
							checked={ attributes.verticalCenter }
							onChange={() => setAttributes({verticalCenter: !attributes.verticalCenter})}
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ className }>
					<InnerBlocks
						templateLock={ false }
						renderAppender={
							hasChildBlocks
								? undefined
								: () => <InnerBlocks.ButtonBlockAppender />
						}
					/>
				</div>
			</Fragment>
		);
	}
}


export default compose(
	withColors({bgColor: 'color'}),
	withSelect( ( select, ownProps ) => {
		const { clientId } = ownProps;
		const { getBlockOrder } =
			select( 'core/block-editor' ) || select( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

		return {
			hasChildBlocks: getBlockOrder( clientId ).length > 0,
		};
	} )
)( BootstrapColumnEdit );
