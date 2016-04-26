import { i_go_to, i_should_see } from './lib/lib';

describe('ionFooterBar', function() {
    describe('Basic footer (no buttons, just a title, no attributes).', function () {
        it ('displays the footer along with the title', function() {
            i_go_to('/headersFooters/footer/basic');

            let footer = 'ion-footer-bar';
            let footer_text = `//${footer}/h1[contains(., "Basic Footer")]`;
            i_should_see(footer);
            i_should_see(footer_text);
        });
    });

    describe('ionFooter alignTitle attribute.', function () {
        it ('aligns the title in the footer', function() {
            i_go_to('/headersFooters/footer/alignTitle');

            let footer = 'ion-footer-bar';
            let footer_text = `//${footer}/h1[contains(., "Footer alignTitle") and contains(@class, "title-right")]`;
            i_should_see(footer);
            i_should_see(footer_text);
        });
    });

    describe('ionFooter sub-footer.', function () {
        it ('aligns the title in the footer, sub-footer', function() {
            i_go_to('/headersFooters/footer/subFooter');

            let footer = 'ion-footer-bar';
            let sub_footer = '//ion-footer-bar[contains(@class, "bar-subfooter")]';
            i_should_see(footer);
            i_should_see(sub_footer);
        });
    });

    describe('ionFooter buttons.', function () {
        it ('ionFooter buttons', function() {
            i_go_to('/headersFooters/footer/buttons');

            let footer = 'ion-footer-bar';
            let footer_left_button = `//${footer}/*[contains(@class, 'buttons')][1]`;
            let footer_right_button = `//${footer}/*[contains(@class, 'buttons')][2]`;
            i_should_see(footer);
            i_should_see(footer_left_button);
            i_should_see(footer_right_button);
        });
    });
});