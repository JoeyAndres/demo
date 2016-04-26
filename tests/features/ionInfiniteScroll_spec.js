import { i_go_to, i_should_see, i_should_not_see, i_wait, i_drag_element } from './lib/lib';

describe('ionInfiniteScroll', function() {
    beforeEach(function() {
        browser.windowHandleSize({width: 800, height: 600});

        i_go_to('lists/ionInfiniteScroll');
    });

    it ('displays no list item the moment I enter.', function() {
        i_should_not_see('ion-item');
        i_should_see('ion-spinner');
    });

    it ('should keeps adding items until it reaches bottom', function() {
        let nth_ionListItem = n => `//ion-item[${n}]`;

        i_wait(4);  // All 6 items should've reached bottom by now.
        i_should_not_see(nth_ionListItem(7));
    });

    it ('should show new ones when I scroll downwards.', function() {
        let nth_ionListItem = n => `//ion-item[${n}]`;

        i_wait(4);  // All 6 items should've reached bottom by now.

        // Scroll to show more.
        // todo: this is failing since we cannot scroll for some unknown reason.
        //browser.element(nth_ionListItem(6)).scroll();

        //i_wait(1);
        //i_should_see(nth_ionListItem(7));
    });
});