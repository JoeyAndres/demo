import { i_go_to, i_should_see } from './lib/lib';

describe('ionHeaderBar', function() {
    describe('Basic header (no buttons, just a title, no attributes).', function () {
        it ('displays the footer along with the title', function() {
            i_go_to('/headersFooters/header/basic');

            let footer = 'ion-header-bar';
            let footer_text = `//${footer}/h1[contains(., "Basic Header")]`;
            i_should_see(footer);
            i_should_see(footer_text);
        });
    });

    describe('ionHeader alignTitle attribute.', function () {
        it ('aligns the title in the header', function() {
            i_go_to('/headersFooters/header/alignTitle');

            let header = 'ion-header-bar';
            let footer_header = `//${header}/h1[contains(., "Header alignTitle") and contains(@class, "title-right")]`;
            i_should_see(header);
            i_should_see(footer_header);
        });
    });

    describe('ionHeader sub-header.', function () {
        it ('aligns the title in the header, sub-header', function() {
            i_go_to('/headersFooters/header/subHeader');

            let header = 'ion-header-bar';
            let sub_header = '//ion-header-bar[contains(@class, "bar-subheader")]';
            i_should_see(header);
            i_should_see(sub_header);
        });
    });

    describe('ionHeader buttons.', function () {
        it ('ionHeader buttons', function() {
            i_go_to('/headersFooters/header/buttons');

            let header = 'ion-header-bar';
            let header_left_button = `//${header}/*[contains(@class, 'buttons')][1]`;
            let header_right_button = `//${header}/*[contains(@class, 'buttons')][2]`;
            i_should_see(header);
            i_should_see(header_left_button);
            i_should_see(header_right_button);
        });
    });
});