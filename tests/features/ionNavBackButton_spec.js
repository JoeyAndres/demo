import { i_go_to, i_should_see, i_should_not_see, i_click, i_wait } from './lib/lib';

describe('ionNavBackButton', function() {
    beforeEach(function() {
        browser.windowHandleSize({width: 800, height: 600});

        i_go_to('/');
    });

    it ('should not be shown when no back view available.', function() {
        let back_button = "[nav-bar='active'] button.back-button";
        i_should_not_see(back_button);
    });

    it ('shows the back button when back view is available.', function() {
        let back_button = "[nav-bar='active'] button.back-button";
        i_click('//ion-item[1]');
        i_wait(1);  // Wait to transition in.
        i_should_see(back_button);

        // It should hide the back-button when I go back.
        i_click(back_button);
        i_wait(1);  // Wait to transition out.
        i_should_not_see(back_button);
    });
});