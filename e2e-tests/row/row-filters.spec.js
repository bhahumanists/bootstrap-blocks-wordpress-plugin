/**
 * WordPress dependencies
 */
import {
	activatePlugin,
	deactivatePlugin,
	createNewPost,
	getEditedPostContent,
} from '@wordpress/e2e-test-utils';
import {
	insertRowBlock,
	selectRowBlock,
} from './row-helper';

describe( 'row block filters', () => {
	beforeAll( async () => {
		await activatePlugin( 'wp-bootstrap-blocks-test-row-filters' );
	} );

	afterAll( async () => {
		await deactivatePlugin( 'wp-bootstrap-blocks-test-row-filters' );
	} );

	beforeEach( async () => {
		await createNewPost();
	} );

	it( 'Should have custom templates', async () => {
		await insertRowBlock();
		await selectRowBlock();

		// Custom template should be available
		expect( await page.$$( '.wp-bootstrap-blocks-template-selector-button' ) ).toHaveLength( 6 );
		expect( await page.$( '.wp-bootstrap-blocks-template-selector-button > button[aria-label="1 Column (2/3 width)"]' ) ).not.toBeNull();
		expect( await page.$( '.wp-bootstrap-blocks-template-selector-button > button[aria-label="1 Column (2/3 width)"] > svg.dashicons-yes' ) ).not.toBeNull();

		// Template should be applied
		await page.click( '.wp-bootstrap-blocks-template-selector-button > button[aria-label="1 Column (2/3 width)"]' );

		expect( await getEditedPostContent() ).toMatchSnapshot();

		expect( console ).toHaveWarned();
	} );
} );
