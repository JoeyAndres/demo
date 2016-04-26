export let root_url = process.env['chimp.ddp'];

export let i_wait_for_redirect = function(expected_url, timeout = 5000) {
    var current_url = browser.url().value;

    browser.waitUntil(function() {
        let url = browser.getUrl();
        current_url = url;
        return current_url == root_url + expected_url;
    }, timeout);
};

export let i_go_to = function(url) {
    let url_start_not_slash = url[0] !== '/';
    if (url_start_not_slash) { url = `/${url}`; }
    let full_url = root_url + url;
    browser.url(full_url);
    i_wait_for_redirect(url);
};

export let i_wait = function(t) {
  browser.pause(t * 1000);
};

export let i_click = function(selector) {
    browser.waitForVisible(selector);
    // Set 500ms as min i_wait time before click.
    // Prior to this, cucumber was clicking while on transition, therefore
    // missing and throwing errors about different element received the clicked.
    i_wait(0.2);
    browser.click(selector);
};

export let there_should_be = function(selector) {
    try {
        browser.waitForExist(selector);
    } catch(e) {
        throw `${selector} is not in the page.`;
    }
};

export let there_should_not_be = function(selector) {
    try {
        browser.waitForExist(selector, 1000, true);
    } catch(e) {
        throw `${selector} is in the page.`;
    }
};

export let i_should_see = function(selector) {
    try {
        browser.waitForVisible(selector);
    } catch(e) {
        throw `${selector} is not visible in the page.`;
    }
};

export let i_should_not_see = function(selector) {
    try {
        browser.waitForVisible(selector, 1000, true);
    } catch(e) {
        throw `${selector} visible in the page.`;
    }
};

export let i_drag_element = function(selector, x, y) {
    browser.waitForExist(selector);
    browser.moveToObject(selector, 0, 0);
    browser.buttonDown();
    browser.moveToObject(selector, x, y);
    browser.buttonUp();
};