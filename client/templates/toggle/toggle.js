Template.demoToggle.onCreated(function() {
    this.toggleModel = new ReactiveVar(false);
});

Template.demoToggle.helpers({
    toggleModel() {
        return Template.instance().toggleModel;
    },

    toggleModel_value() {
        return Template.instance().toggleModel.get().toString();
    }
});