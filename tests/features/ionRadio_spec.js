import { i_go_to, i_click, i_wait, i_should_see, i_should_not_see, there_should_be, there_should_not_be } from './lib/lib';

describe('ionCheckbox @watch', function() {
    beforeEach(() => {
        i_go_to('/radio');
    });

    describe('Default behaviour (no modifications in config).', function () {
        it ('model attribute to the value attribute at initialization.', function() {
            let test_radio_group = n => `input[value="test value ${n}"]`;

            // Confirm that the check is in appropriate radio item.
            there_should_be(test_radio_group(1) + ":checked");
            there_should_be(test_radio_group(2));
            there_should_be(test_radio_group(3));
            there_should_not_be(test_radio_group(2) + ":checked");
            there_should_not_be(test_radio_group(3) + ":checked");

            // Confirm that the model have correct value.
            i_should_see("//*[@id='model-value' and contains(., 'test value 1')]");
        });
        
        it ('model attribute is changed when the checked is changed.', function() {
            let test_radio_clickable = n => `//*[contains(@class, 'item-radio')][${n}]`;
            let test_radio_group = n => `input[value="test value ${n}"]`;

            i_click(test_radio_clickable(2));

            // Confirm that the check is in appropriate radio item.
            there_should_be(test_radio_group(1));
            there_should_be(test_radio_group(2) + ':checked');
            there_should_be(test_radio_group(3));
            there_should_not_be(test_radio_group(1) + ":checked");
            there_should_not_be(test_radio_group(3) + ":checked");

            // Confirm that the model have correct value.
            i_should_see("//*[@id='model-value' and contains(., 'test value 2')]");
        });
    });
});