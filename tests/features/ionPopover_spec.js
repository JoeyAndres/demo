import { i_go_to, i_should_see, i_should_not_see, i_click, i_wait } from './lib/lib';

describe('ionPopover', function() {
    beforeEach(function() {
        browser.windowHandleSize({width: 800, height: 600});

        i_go_to('/popover');
    });

    it ('should not be shown at start.', function() {
        i_should_not_see('.popover');
    });

    it ('shows when the [data-ion-popover] button is clicked.', function() {
        i_click('[data-ion-popover]');

        i_should_see('.popover');
        i_should_see("//*[contains(@class, 'popover')]/*[contains(., 'Meteor')]");
        i_should_see("//*[contains(@class, 'popover')]/*[contains(., 'Ionic')]");
        i_should_see("//*[contains(@class, 'popover')]/*[contains(., 'Meteoric')]");
    });

    it ('disappears when I click the backdrop', function() {
        i_click('[data-ion-popover]');

        i_click('.popover-backdrop.active');
        i_should_not_see('.popover');
    });
});