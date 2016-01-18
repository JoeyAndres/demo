module.exports = function() {
    this.Given(/^"([^"]*)" navigate to "([^"]*)"$/, user_navigate_to_url);
    this.Then(/^"([^"]*)" should be in "([^"]*)"$/, user_should_be_in_url);

    this.Given(/^"([^"]*)" set "([^"]*)" value to "([^"]*)"$/, user_set_selector_value_to_x);

    this.Given(/^"([^"]*)" click "([^"]*)"$/, user_click_selector);

    this.Given(/^"([^"]*)" touch flick "([^"]*)" ("([^"]*)","([^"]*)") at "([^"]*)" pps$/, user_touch_flick_id_by_x_y_at_z_pps);

    this.Then(/^"([^"]*)" should see "([^"]*)"$/, user_should_see_selector);

    this.Then(/^"([^"]*)" should not see "([^"]*)"$/, user_should_not_see_selector);

    this.Then(/^"([^"]*)" should read "([^"]*)"$/, user_should_read_text);

    this.Given(/^"([^"]*)" "([^"]*)" value is "([^"]*)"$/, user_selector_value_is_x);

    this.Given(/^I wait for "([^"]*)" seconds$/, i_wait_for_x_seconds);

    this.Given(/^"([^"]*)" click back button$/, user_click_back_button);

    this.Given(/^"([^"]*)" drag "([^"]*)" to "([^"]*)"$/, user_drag_from_to);
};