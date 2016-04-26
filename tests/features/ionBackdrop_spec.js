import { i_go_to, i_click, i_wait, i_should_see, i_should_not_see } from './lib/lib';

describe('ionBackdrop', function() {
    beforeEach(() => {
        i_go_to('/backdrop');
    });

    describe('Default behaviour (no modifications in config).', function () {
        it ('shows the backdrop when the button is clicked', function() {
            i_click('[data-action=showBackdrop]');

            let backdrop = '.backdrop';
            i_should_see(backdrop);

            // Ensure that backdrop still exists sometime (1.0s - x) s where x is some reasonable small interval.
            let x = 0.1;
            i_wait(1 - x);
            i_should_see(backdrop);

            // Ensure that backdrop animates "out".
            i_wait(x + 1.0);
            i_should_not_see(backdrop);
        });
    });
});