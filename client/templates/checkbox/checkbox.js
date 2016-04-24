Template.demoCheckbox.onCreated(function() {
    this.html5_checkbox_model = new ReactiveVar(false);
    this.css3_checkbox_model = new ReactiveVar(false);
    this.javascript_checkbox_model = new ReactiveVar(false);
});

Template.demoCheckbox.helpers({
    html5_checkbox_model() {
        return Template.instance().html5_checkbox_model;
    },

    css3_checkbox_model() {
        return Template.instance().css3_checkbox_model;
    },

    javascript_checkbox_model() {
        return Template.instance().javascript_checkbox_model;
    },

    html5_checkbox_model_value() {
        return Template.instance().html5_checkbox_model.get().toString();
    },

    css3_checkbox_model_value() {
        return Template.instance().css3_checkbox_model.get().toString();
    },

    javascript_checkbox_model_value() {
        return Template.instance().javascript_checkbox_model.get().toString();
    }
});