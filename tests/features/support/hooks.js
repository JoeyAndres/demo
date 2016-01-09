module.exports = function() {
    this.Before(function(scenario) {
        user_navigate_to_url('all', '/');
    });

    this.After(function(scenario) {});
};