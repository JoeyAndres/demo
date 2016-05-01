Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  // todo: prepend all templates with 'demo'.
  this.route('index', { path: '/' });
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

  this.route('buttons.headersFooters', {
    path: 'buttons/headers-footers',
    layoutTemplate: 'simpleLayout'
  });
  this.route('buttons.headersFootersClear', {
    path: 'buttons/headers-footers/clear',
    layoutTemplate: 'simpleLayout'
  });
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
  this.route('headersFooters.header', {
    path: 'headersFooters/header',
    layoutTemplate: 'simpleLayout'
  });
  this.route('headersFooters.footer', { path: 'headersFooters/footer'});

  // Footers.
  this.route('headersFooters.footer.basic', {
    path: 'headersFooters/footer/basic'
  });
  this.route('headersFooters.footer.alignTitle', {
    path: 'headersFooters/footer/alignTitle',
    template: 'headersFootersFooterAlignTitle'
  });
  this.route('headersFooters.footer.buttons', {
    path: 'headersFooters/footer/buttons',
    template: 'headersFootersFooterButtons'
  });
  this.route('headersFooters.footer.subfooter', {
    path: 'headersFooters/footer/subfooter',
    template: 'headersFootersFooterSubFooter'
  });

  // Headers.
  this.route('headersFooters.header.basic', {
    path: 'headersFooters/header/basic',
    layoutTemplate: 'simpleLayout'
  });
  this.route('headersFooters.header.alignTitle', {
    path: 'headersFooters/header/alignTitle',
    template: 'headersFootersHeaderAlignTitle',
    layoutTemplate: 'simpleLayout'
  });
  this.route('headersFooters.header.buttons', {
    path: 'headersFooters/header/buttons',
    template: 'headersFootersHeaderButtons',
    layoutTemplate: 'layout'
  });
  this.route('headersFooters.header.subheader', {
    path: 'headersFooters/header/subheader',
    template: 'headersFootersHeaderSubHeader',
    layoutTemplate: 'simpleLayout'
  });

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