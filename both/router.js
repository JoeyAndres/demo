Router.configure({
  layoutTemplate: 'layout'
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }
  }
});

Router.map(function() {
  // todo: prepend all templates with 'demo'.
  this.route('index', {path: '/'});
  this.route('actionSheet');
  this.route('backdrop');

  this.route('buttons');
  this.route('demoButtonsBlock', { path: 'buttons/block' });
  this.route('demoButtonsFull', { path: 'buttons/full' });
  this.route('demoButtonsDifferentSizes', { path: 'buttons/different-sizes' });
  this.route('demoButtonsOutlined', { path: 'buttons/outlined' });
  this.route('demoButtonsClear', { path: 'buttons/clear' });
  this.route('demoButtonsIcons', { path: 'buttons/icons' });
  this.route('demoButtonsHeadersFooters', { path: 'buttons/headers-footers' });
  this.route('demoButtonsHeadersFootersClear', { path: 'buttons/headers-footers/clear' });
  this.route('demoButtonsBar', { path: 'buttons/bar' });

  this.route('content');
  this.route('forms', {
    data: function () {
      return {
        post: Posts.find().fetch()[0]
      };
    }
  });
  this.route('footer');
  this.route('header');
  this.route('headersFooters');

  this.route('lists');
  this.route('demoListsDividers', { path: 'lists/dividers' });
  this.route('demoListsIcons', { path: 'lists/icons' });
  this.route('demoListsButtons', { path: 'lists/buttons' });
  this.route('demoListsAvatars', { path: 'lists/avatars' });
  this.route('demoListsThumbnails', { path: 'lists/thumbnails' });
  this.route('demoListsInsetLists', { path: 'lists/inset-lists' });
  this.route('listsComplex', { path: 'lists/complex' });

  this.route('demoionScroll', { path: '/scroll' });

  this.route('loading');
  this.route('modal');
  this.route('navigation');
  this.route('navigation.one', {path: '/navigation/one'});
  this.route('navigation.two', {path: '/navigation/two'});
  this.route('navigation.three', {path: '/navigation/three'});
  this.route('popover');
  this.route('popup');
  this.route('sideMenu');
  this.route('slideBox');
  this.route('spinner');
  this.route('tabs.one', {path: '/tabs/one', layoutTemplate: 'tabsLayout'});
  this.route('tabs.two', {path: '/tabs/two', layoutTemplate: 'tabsLayout'});
  this.route('tabs.three', {path: '/tabs/three', layoutTemplate: 'tabsLayout'});
  this.route('tabs.four', {path: '/tabs/four', layoutTemplate: 'tabsLayout'});
  this.route('userAccounts');
  this.route('radio');
});
