import { i_go_to, i_click, i_wait, i_should_see, i_should_not_see, there_should_be, there_should_not_be } from './lib/lib';

describe('ionToggle @watch', function() {
    beforeEach(() => {
        i_go_to('/toggle');
    });

    describe('Default behaviour (no modifications in config).', function () {
        it ('model attribute to the value attribute at initialization.', function() {
            let toggle = `input[name="test_toggle"]`;

            there_should_be(toggle);
            there_should_not_be(toggle + ':checked');

            // Confirm that the model have correct value.
            i_should_see("//*[@id='model-value' and contains(., 'false')]");
        });

        it ('model attribute is changed when the checked is changed.', function() {
            let toggle = `input[name="test_toggle"]`;
            let toggle_clickable = "//*[contains(@class, 'item-toggle')][1]/*[contains(@class, 'toggle')]";

            i_click(toggle_clickable);

            there_should_be(toggle);
            there_should_be(toggle + ':checked');

            // Confirm that the model have correct value.
            i_should_see("//*[@id='model-value' and contains(., 'custom toggle value')]");
        });
    });
});