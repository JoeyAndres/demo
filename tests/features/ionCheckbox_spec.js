import { i_go_to, i_click, i_wait, i_should_see, i_should_not_see, there_should_be, there_should_not_be } from './lib/lib';

describe('ionCheckbox', function() {
    beforeEach(() => {
        i_go_to('/checkbox');
    });

    describe('Default behaviour (no modifications in config).', function () {
        it ('model attribute to the value attribute at initialization.', function() {
            let html5_checkbox = 'input[name="html5_checkbox"]';
            let css3_checkbox = 'input[name="css3_checkbox"]';
            let javascript_checkbox = 'input[name="javascript_checkbox"]';

            // Basic checkbox existence check.
            there_should_be(html5_checkbox);
            there_should_be(css3_checkbox);
            there_should_be(javascript_checkbox);

            // Check mark checks.
            there_should_be(`${html5_checkbox}:checked`);
            there_should_not_be(`${css3_checkbox}:checked`);
            there_should_not_be(`${javascript_checkbox}:checked`);

            // Model check.
            let html5_checkbox_model = "//*[@id='html5_checkbox_model' and contains(., 'true')]";
            let css3_checkbox_model = "//*[@id='css3_checkbox_model' and contains(., 'custom false value')]";
            let javascript_checkbox_model = "//*[@id='javascript_checkbox_model' and contains(., 'false')]";

            there_should_be(html5_checkbox_model);
            there_should_be(css3_checkbox_model);
            there_should_be(javascript_checkbox_model);
        });

        it ('model attribute reflects the checkbox state.', function() {
            let html5_checkbox = "//form[@name='radio_button_form']/*[contains(@class, 'item-checkbox')][1]";
            let css3_checkbox = "//form[@name='radio_button_form']/*[contains(@class, 'item-checkbox')][2]";
            let javascript_checkbox = "//form[@name='radio_button_form']/*[contains(@class, 'item-checkbox')][3]";

            i_click(html5_checkbox);
            i_click(css3_checkbox);
            i_click(javascript_checkbox);

            // Check mark checks.
            // Note: we need to reassign selector since xpath property selector is I don't want to deal with.
            html5_checkbox = 'input[name="html5_checkbox"]';
            css3_checkbox = 'input[name="css3_checkbox"]';
            javascript_checkbox = 'input[name="javascript_checkbox"]';
            there_should_not_be(`${html5_checkbox}:checked`);
            there_should_be(`${css3_checkbox}:checked`);
            there_should_be(`${javascript_checkbox}:checked`);

            // Model check.
            let html5_checkbox_model = "//*[@id='html5_checkbox_model' and contains(., 'false')]";
            let css3_checkbox_model = "//*[@id='css3_checkbox_model' and contains(., 'custom true value')]";
            let javascript_checkbox_model = "//*[@id='javascript_checkbox_model' and contains(., 'true')]";

            there_should_be(html5_checkbox_model);
            there_should_be(css3_checkbox_model);
            there_should_be(javascript_checkbox_model);
        });
    });
});