/**
 * Created by jandres on 09/01/16.
 */
global.root_url = process.env['chimp.ddp'];
global.browsers = {};

global.get_browser_for = function(browser_index){
    browser_index = parseInt(browser_index, 10);
    if (!!browser.instances && browser.instances[browser_index]) { return browser.instances[browser_index]; }
    return browser;
};

global.wait_for_redirect = function(user, expected_url, timeout) {
    timeout = timeout || 5000;
    var current_url = get_browser_for(user).url().value;

    get_browser_for(user).waitUntil(function() {
        return this.getUrl().then(function (url) {
            current_url = url;
            return current_url === root_url + expected_url;
        });
    }, timeout);
};

global.user_navigate_to_url = function(user, url) {
    var url_start_not_slash = url[0] !== '/';
    if (url_start_not_slash) { url = `/${url}`; }
    get_browser_for(user).url(root_url + url);
};

global.user_should_be_in_url = function(user, url) {
    wait_for_redirect(user, url);
};

global.user_set_selector_value_to_x = function (user, selector, text) {
    get_browser_for(user).setValue(selector, text);
};

global.user_click_selector = function (user, selector) {
    get_browser_for(user).waitForExist(selector);
    // Set 500ms as min wait time before click.
    // Prior to this, cucumber was clicking while on transition, therefore
    // missing and throwing errors about different element received the clicked.
    i_wait_for_x_seconds(0.2);
    get_browser_for(user).click(selector);
};

global.user_should_see_selector = function (user, selector) {
    try {
        get_browser_for(user).waitForExist(selector);
    } catch(e) {
        throw `${selector} does not exist in the page.`;
    }
};

global.user_should_not_see_selector = function (user, selector) {
    try {
        get_browser_for(user).waitForExist(selector, 2000, true);
    } catch(e) {
        throw `${selector} exist in the page.`;
    }
};

global.user_should_read_text = function (user, text) {
    var body_html = get_browser_for(user).getHTML('body');
    if (!(new RegExp(text)).test(body_html)) {
        throw `"${text}" does not exist in the page.`;
    }
};

global.user_selector_value_is_x = function (user, selector, expected_value) {
    get_browser_for(user).waitForExist(selector);
    if (get_browser_for(user).getValue(selector) !== expected_value) {
        var selector_value = get_browser_for(user).getValue(selector);
        throw `${selector}'s value ${selector_value} is not equal expected value ${expected_value}.`;
    }
};

global.i_wait_for_x_seconds = function (x) {
    browser.pause(x * 1000);
};

global.user_click_back_button = function(user) {
    user_click_selector(user, "//span[contains(., 'Back')]");
};

global.user_touch_flick_id_by_x_y_at_z_pps = function(user, id, x, y, z) {
    get_browser_for(user).waitForExist(id);
    get_browser_for(user).touchFlick(id, x, y, z);
};