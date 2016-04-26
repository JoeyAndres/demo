import { i_go_to, i_should_see, i_should_not_see, i_click, i_wait } from './lib/lib';

describe('ionPopup', function() {
    beforeEach(function() {
        browser.windowHandleSize({width: 800, height: 600});

        i_go_to('/popup');
    });

    it ('shows/hide normal popup.', function() {
        i_click("//button[contains(., 'Show Popup')]");

        i_should_see("//*[contains(., 'A Popup')]");
        i_should_see("//*[contains(., 'quick popup.')]");

        i_click("//button[contains(., 'Close me')]");
        i_wait(0.5);
        i_should_not_see("//*[contains(., 'A Popup')]");
        i_should_not_see("//*[contains(., 'quick popup.')]");
    });

    it ('shows confirm popup, hide via ok button.', function() {
        i_click("//button[contains(., 'Show Confirm')]");

        i_should_see("//*[contains(., 'Are you sure?')]");
        i_should_see("//*[contains(., 'Are you really sure?')]");

        i_click("//button[contains(., 'Ok')]");
        i_wait(0.5);
        i_should_not_see("//*[contains(., 'Are you sure?')]");
        i_should_not_see("//*[contains(., 'Are you really sure?')]");
    });

    it ('shows confirm popup, hide via cancel button.', function() {
        i_click("//button[contains(., 'Show Confirm')]");

        i_should_see("//*[contains(., 'Are you sure?')]");
        i_should_see("//*[contains(., 'Are you really sure?')]");

        i_click("//button[contains(., 'Cancel')]");
        i_wait(0.5);
        i_should_not_see("//*[contains(., 'A Popup')]");
        i_should_not_see("//*[contains(., 'Are you sure?')]");
        i_should_not_see("//*[contains(., 'Are you really sure?')]");
    });

    it ('shows/hide alert popup.', function() {
        i_click("//button[contains(., 'Show Alert')]");

        i_should_see("//*[contains(., 'An Alert')]");
        i_should_see("//*[contains(., 'This is an alert!')]");

        i_click("//*[contains(@class, 'popup-buttons')]/button[1]");
        i_wait(0.5);
        i_should_not_see("//*[contains(., 'An Alert')]");
        i_should_not_see("//*[contains(., 'This is an alert!')]");
    });

    it ('shows/hide prompt popup', function() {
        i_click("//button[contains(., 'Show Prompt')]");

        i_should_see("//*[contains(., 'Security Check')]");
        i_should_see("//*[contains(., 'Please enter your password')]");
        i_should_see("//input[contains(@placeholder, 'Your Password')]");

        i_click("//button[contains(., 'Submit')]");
        i_wait(0.5);
        i_should_not_see("//*[contains(., 'Security Check')]");
        i_should_not_see("//*[contains(., 'Please enter your password')]");
        i_should_not_see("//input[contains(@placeholder, 'Your Password')]");
    });
});