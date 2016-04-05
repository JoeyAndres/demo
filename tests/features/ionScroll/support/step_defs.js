let ionScrollData = {
    scrollPos: {
        left: -1,
        top: -1
    }
};

module.exports = function() {
    this.Then(/^"([^"]*)" take note of the scroll position$/, function (user) {
        i_wait_for_x_seconds(4);  // Wait for the front-end to add the controller.

        let $ionicScrollDelegate = client.executeAsync(function(done) {
            done($ionicScrollDelegate);
        }).value;

        if (!$ionicScrollDelegate) {
            throw "$ionScrollDelegate is not available in client.";
        }

        let ionScrollCtrlExist = $ionicScrollDelegate._instances.length > 0;
        if (!ionScrollCtrlExist) throw "ionSroll dne.";

        let {left, top} = client.executeAsync(function(done) {
            done($ionicScrollDelegate._instances[0].getScrollPosition());
        }).value;

        ionScrollData.scrollPos = { left, top }
    });

    this.Then(/^"([^"]*)" drag "([^"]*)" to x:"([^"]*)" y:"([^"]*)"$/, function (user, selector, x, y) {
        browser.waitForExist(selector);
        browser.moveToObject(selector);  // Middle of the element.
        browser.buttonDown();
        browser.moveToObject(selector, parseInt(x, 10), parseInt(y, 10));
        browser.buttonUp();
        i_wait_for_x_seconds(10);
    });
};