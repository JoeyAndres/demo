Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  // todo: prepend all templates with 'demo'.
  this.route('index', {path: '/'});
  this.route('actionSheet');
  this.route('backdrop');

  this.route('buttons');
  this.route('buttons.default', { path: 'buttons/default' });
  this.route('buttons.block', { path: 'buttons/block' });
  this.route('buttons.full', { path: 'buttons/full' });
  this.route('buttons.differentSizes', { path: 'buttons/different-sizes' });
  this.route('buttons.outlined', { path: 'buttons/outlined' });
  this.route('buttons.clear', { path: 'buttons/clear' });
  this.route('buttons.icons', { path: 'buttons/icons' });
  this.route('buttons.headersFooters', { path: 'buttons/headers-footers' });
  this.route('buttons.headersFootersClear', { path: 'buttons/headers-footers/clear' });
  this.route('buttons.bar', { path: 'buttons/bar' });

  this.route('content');
  this.route('forms', {
    data: function () {
      return {
        post: Posts.find().fetch()[0]
      };
    }
  });
  this.route('headersFooters');
  this.route('headersFooters.header', { path: 'headersFooters/header' ,layoutTemplate: "simpleLayout"});
  this.route('headersFooters.footer', { path: 'headersFooters/footer' ,layoutTemplate: "simpleLayout"});
  this.route('headersFooters.defaultCenterAlign', { path: 'headersFooters/defaultCenterAlign' ,layoutTemplate: "simpleLayout"});
  this.route('headersFooters.rightAlign', { path: 'headersFooters/rightAlign' ,layoutTemplate: "simpleLayout"});
  this.route('headersFooters.leftAlign', { path: 'headersFooters/leftAlign' ,layoutTemplate: "simpleLayout"});

  this.route('lists');
  this.route('demoListsDividers', { path: 'lists/dividers' });
  this.route('demoListsIcons', { path: 'lists/icons' });
  this.route('demoListsButtons', { path: 'lists/buttons' });
  this.route('demoListsAvatars', { path: 'lists/avatars' });
  this.route('demoListsThumbnails', { path: 'lists/thumbnails' });
  this.route('demoListsInsetLists', { path: 'lists/inset-lists' });
  this.route('listsComplex', { path: 'lists/complex' });

  this.route('demoionScroll', { path: '/scroll' });
  this.route('demoListsionInfiniteScroll', { path: 'lists/ionInfiniteScroll' });

  this.route('loading');
  this.route('modal');
  this.route('navigation');
  this.route('navigation.one', {path: '/navigation/one'});
  this.route('navigation.two', {path: '/navigation/two'});
  this.route('navigation.three', {path: '/navigation/three'});
  this.route('popover');
  this.route('popup');
  this.route('sideMenu');
  this.route('slides');
  this.route('spinner');
  this.route('tabsDefault', {
    path: '/tabs',
    action() {
      this.redirect('/tabs/home');
    }
  });
  this.route('tabs', { template: 'tabs', path: '/tabs/:tab' });
  this.route('userAccounts');
  this.route('radio');
  this.route('demoCheckbox', { path: 'checkbox' });
  this.route('demoToggle', { path: 'toggle' });

  // Tests.
  // Test::ionScroll
  this.route('scrollDirectionX');
  this.route('scrollDirectionY');
});
