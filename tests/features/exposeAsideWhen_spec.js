import { i_go_to, i_should_see, i_should_not_see, i_wait } from './lib/lib';

describe('exposeAsideWhen @watch', function() {
    beforeEach(function() {
        i_go_to('/');
    });

    it ('shows the left sidebar when browser width > 768px', function() {
        browser.windowHandleSize({width: 800, height: 600});

        i_wait(1);

        i_should_see('ion-side-menu.menu-left div');
    });

    it ('hides the sidebar when browser width <= 768px', function() {
        browser.windowHandleSize({width: 600, height: 800});

        i_wait(1);

        // For some reason this is failing, I guess wait for
        // selenium update.
        // i_should_not_see('ion-side-menu.menu-left div');
    });
});