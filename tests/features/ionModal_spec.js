import { i_go_to, i_should_see, i_should_not_see, i_click } from './lib/lib';

describe('ionModal', function() {
    beforeEach(function() {
        browser.windowHandleSize({width: 800, height: 600});

        i_go_to('/modal');
    });

    it ('should not be shown at start.', function() {
        i_should_not_see('div.modal');
    });

    it ('shows modal when button with "data-ion-modal=_myModal".', function() {
        i_click('[data-ion-modal="_myModal"]');
        i_should_see('div.modal');
    });

    it ('hide the modal when close button is clicked.', function() {
        i_click('[data-ion-modal="_myModal"]');
        i_click('[data-dismiss="modal"]');
        i_should_not_see('div.modal');
    });
});