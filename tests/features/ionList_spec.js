import { i_go_to, i_click, i_wait, i_should_see, i_should_not_see, there_should_be, there_should_not_be } from './lib/lib';

describe('ionList', function() {
    describe('Basic list.', function () {
        beforeEach(() => {
            i_go_to('/lists');
            i_wait(1);
        });

        it ('should show all items as expected.', function() {
            let nth_ionListItem = n => `//ion-item[${n}]`;
            for (let n = 1; n <= 20; n++) {
                // We need to scroll for some of them.
                there_should_be(nth_ionListItem(n));
            }
        });
    });

    describe('route/path/url parameters', function () {
        // todo: I won't test this further for now since the possibility of
        //       integrating flow router. This is not final.
        it ('route parameter works', function() {
            i_go_to('/');

            i_click('//ion-item[1]');
            i_should_see("//div[contains(., 'Action Sheet')]");
        });

        it ('path parameter works', function() {

        });

        it ('url parameter works', function() {

        });

        it ('href parameter works', function() {

        });
    });

    describe('List in complex state (ionOptionButton, ionDeleteButton, or, ionReorderButton exist).', function () {
        beforeEach(function() {
            i_go_to('/lists/complex');
            i_wait(1);
            this.nth_ionListItem_content = n => `//ion-item[${n}]`;
        });

        it ('should show all list item content for sanity check', function() {
            for (let n = 1; n <= 20; n++) {
                // We need to scroll for some of them.
                there_should_be(this.nth_ionListItem_content(n));
            }
        });

        describe('List containing ionOptionButton.', function () {
            it ('should hide all ionOptionButton at start', function () {
                i_should_not_see('ion-option-button');
            });

            it ('should show all ionOptionButton when I swipe to left', function() {
                //browser.swipeLeft(this.nth_ionListItem_content(1), 1);
            });

            it ('should close other open item (showing ionOptionButton) when I swipe other list items.', function() {

            });
        });

        describe('List containing ionDeleteButton.', function () {

        });

        describe('List containing ionReorderButton.', function () {
            
        });
    });
});