# SRS Technology Document

## Introduction

In short, SRS (Student Response System) utilizes Meteor to handle all the development stack. From the client front end to the server backend, these are handle by Meteor.

## Instalation

For OSX or Linux:

```bash
curl https://install.meteor.com/ | sh
```

For windows, download the [official installer](https://install.meteor.com/windows).

## Hello World Project

```bash
meteor create HelloWorld
```

This should create a `HelloWorld` directory containing .meteor
```bash
├── HelloWorld.css   # Starting stylesheet.
├── HelloWorld.html  # Starting html markup.
├── HelloWorld.js    # Starting javascript.
└── .meteor          # Contains compiled/built files and node modules
    # Note that some directories deemed unimportant for this presentation are dropped.
    ├── .gitignore                                                                                                       
    ├── local        # As of 1.2.1 you will 
    ├── packages     # A list of packages utilized by your app.
    ├── platforms    # A list of supported platforms. Defaults to _server, browser_.
    ├── release      # Meteor version.
    └── versions     # The list of packages in `packages` file also contains other dependency. These dependencies will be displayed here.
```

To play with the `HelloWorld` app, execute the following in your terminal:
```bash
meteor
```

Immediately, clicking on the button, we see a number gets incremented.

### View

Opening up `HelloWorld.html`, we get:
```handlebars
<head>
  <title>HelloWorld</title>
</head>

<body>
  <h1>Welcome to Meteor!</h1>

  {{> hello}}  <!-- The template "hello" is "instantiated" here. -->
</body>

<template name="hello">
  <button>Click Me</button>
  <p>You've pressed the button {{counter}} times.</p>
</template>

```

The following syntax is called _Spacebars_. It is Meteor's own version _Handlebars_, another html templating library. As you an see template is declared via:

```handlebars
<template name="hello">
  <button>Click Me</button>
  <p>You've pressed the button {{counter}} times.</p>
</template>
```

Points of interest at the moment:
* `name="hello"`: The name of the template. Cannot collide with other names. That is why in SRS, there is a template naming convention.
* `{{counter}}`: Displays a value from a _helper_ or template's current _data context_. _helper_ are values exposed by your controller (written in javascript). On the otherhand, _data context_, which usually come from parent template or router.
* 
As mentioned in the comment above, the template can be "instantiated" via:
```handlebars
{{> hello}} <!-- In our case, "hello" is the template name. -->
```

To wire things up, we need to write a controller, so let's head on `HelloWorld.js`.

### Controller

Opening up `HelloWorld.js`, we get:

```javascript
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
```

Except in some special directories, Meteor will compile javascript codes for both client and server. In cases like this, simply test `Meteor.isClient` or `Meteor.isServer` variables.

The server contains the following:
```javascript
Meteor.startup(function () {
    // code to run on server at startup
  });
```

It simply registers a code block to be executed when Meteor have _startup_ in the server. `Meteor.startup` can also be called in the client, but is is called when DOM is ready. Equivalent to:

```javascript
$(window).ready(function() {
});
```

Now, in the client side, we have:
```javascript
// counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
```

#### Session variables
The first code to be executed is `Session.setDefault('counter', 0);`. This declares a session variable, with a name
`counter` and value `0`. This is a global variable that exist until the browser is refreshed (for a persistent session variable use u2622:persistent-session).
Next we have the controller codes. `Session` variables is one of the many "reactive sources". If they are placed in one of the many "reactive computation" blocks,
that "reactive computation" block will be rerun, when one of its "reactive sources", such as Session variables, changes. This is a key concept that we will demonstrate later.

#### helpers
`Template.hello.helpers` declares exposed data points that the template can use. In our case, our template have,

```handlebars
<p>You've pressed the button {{counter}} times.</p>
```

where `counter` gets its data from `Template.hello.helpers` exposed `counter` data source via:

```handlebars
Template.hello.helpers({
    counter: function () {  // This exposes counter datapoint.
      return Session.get('counter');
    }
  });
```

Note: counter can be declared two ways here. One could do:

```javascript
counter: Session.get('counter')
```

In which case counter will have the data when browser compiles client javascript. In our case, `0`, since `Session.setDefault('counter', 0)`. This will not update when session variable counter changes, aka _non-reactive_.

If declared with a function block:

```javascript
counter: function () {  // This exposes counter datapoint.
  return Session.get('counter');
}
```

counter is now treated as a "reactive computation". Since it contains a "reactive source" `Session.get('counter')`, whenever `Session.set('counter', 'some different value')` is called somewhere, counter will be updated. In turn, updating the template.
(To those who care, _Spacebar_ is just a templating language. _Blaze_ is a package built on top of _Spacebar_ and _Tracker_ packages, to make _Spacebar_ templates reactive.)
 
Note: In helpers, one must refer to the current template instance as `Template.instance()`.

#### events

Since counter is incremented whenever we click the button, this `counter` must be incremented in the controller's event handling. The controller's event is handled via:
 
```javascript
Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
```

* `'click button'` is what is known as event map. This basically says, "click event for button elements". If you have,
```html
<button class="dogeman">Much Click</button>
```

* `'click .dogeman'` says, "click event for button with class dogeman". Plus, this is scoped to the current template only, thus other buttons with the same class, outside your template will not trigger an event in this event handler.
* `'click'` says, "click event scoped in this template".

Going back to our _HelloWorld_ app, the `counter` session variable is updated via `Session.set('counter', Session.get('counter') + 1);` in our event handler. Again, since `counter` is a "reactive source", and it exist under a "reactive computation", in this case, counter helper, the helper will be updated, in turn updating the value in the template.

Note: Event handlers are actually passed an event object `e`, and template instance, `template`. Thus the above event handler is equivalent to:

```javascript
'click button': function (e, template) {
```

### life-cycle hooks
_Note: Change template name, hello, with then name of your template._
* `Template.hello.onCreated`:  Called when template is first created. Good place to initialized template variables.
* `Template.hello.onRendered`: Called when template is rendered. Now the DOM elements exists and those, you can access them.
* `Template.hello.onDestroyed`: Clean up/Garbage collection stuff.

Note: Unlike event and helpers, life-cycle hooks can refer to the current template instance as `this`.

### Caveats

* The use of `Session` package is not recommended, thus, as part of the coding standard in SRS, this is not allowed. The recommended use is `ReactiveVar` added via, `meteor add reactive-var`. This can easily be attached to templates reactive hooks onCreated:
```javascript
Template.hello.onCreated({
  this.counter = new ReactiveVar(0);
});
```
thus not polluting the namespace. `Session` variables on the other hand is very prone to namespace collisions (for instance, a package with poor coding standard declared `counter` and increment for some other arbitrary reasons).

* Templates are declared in their own html file.

The following is the **SRS Approved** controller:
```javascript
Template.hello.onCreated({
  this.counter = new ReactiveVar(0);
});
Template.hello.helpers({
  counter: function () {
    return Template.instance().counter.get();
  }
});
Template.hello.events({
  // Event handlers are actually passed an event object e, and template instance, template.
  'click button': function (e, template) {
    // increment the counter when button is clicked
    let old_counter_value = template.counter.get();  
    template.counter.set(old_counter_value + 1);
  }
});
```

## Reserved Directories
The first thing you need to know when structuring your apps is that the Meteor tool has some directories that are hard-coded with specific logic.  At a very basic level, the following directories are "baked in" the Meteor bundler.

```sh
client/                                  # client application code
client/compatibility/                    # legacy 3rd party javascript libraries
lib/                                     # any common code for client/server.
packages/                                # place for all your atmosphere packages
private/                                 # static files that only the server knows about
public/                                  # static files that are available to the client
server/                                  # server code
tests/                                   # unit test files (won't be loaded on client or server)
```


##### client
All code in the *client* directory is run only in the client-side, or web browser.

##### compatibility
The *compatibility* directory contains legacy or 3rd party code, such as JavaScript libraries, etc.

##### lib
The *lib* directory is loaded before other directories in your Meteor project, and is loaded on both the server and client. This is the preferred place to define data models, isomorphic libraries, and business logic.

##### packages
The *packages* directory is where custom packages are stored  during local development. 

##### private
The *private* directory contains static files that should only be available on the web server.

##### public
The *public* directory contains static files that are only available on the application client. This may including branding assets, etc.

##### server
The *server* directory contains server-side assets. This can include authentication logic, methods, and other code that may need security consideration.

##### tests
The *tests* directory is omitted by default when your application is bundled and deployed.  

### Load Order
Note: In order for Meteor to manage the numerous files, the following [load order](http://docs.meteor.com/#/full/structuringyourapp) is enforced.

## Server and Database
By default, the following packages are added in your project:
```sh
autopublish             # Publish all data to the clients (for prototyping)
insecure                # Allow all DB writes from clients (for prototyping)
```

As the description says, these packages exposes full db access to the client. In SRS, these are removed for obvious reasons.

Now we will demonstrate how might one declare and utilize a collection across the stack without `autopublish` and `insecure` packages.

**both server/client:**
```javascript
// This needs to be exposed to both server and client.
foos = new Mongo.Collection('foos');
```

**server:**
```javascript
Meteor.publish('single-foo', function(foo_id) {
  check(foo_id, String);  // Requires check package.
  return foos.find({ _id: foo_id });  // Returns cursor. Cannot use findOne (which returns a foo object).
});
```

**Client:**
```javascript
Template.randomTemplate.onCreated(function() {
  this.foo = new ReactiveVar(null);
  
  // Suppose we hae 'some-foo-id' lying around. Usually comes from router or data context (parent template).
  let fooSubscription = this.subscribe('single-foo', 'some-foo-id');  // Subscribe to 'single-fo' publication.
  
  // This will run once fooSubscription.ready(), a reactive source, changes.
  this.autorun(() => {  // ES2015 function syntax for function, which captures the lexical "this" (current this).
    if (fooSubscription.ready()) {
      this.foo.set(foos.findOne('some-foo-id'));  // This will be run one foos with _id 'some-foo-id' changes. Neat. 
    }
  });
});
```

Note: In SRS, we don't usually call mongo methods directly. We usually all methods to handle permission checks and other validation. 

## Development Practices

If new in Meteor, it is often desirable to just add files in the client/server/lib directory and let Meteor compile them
to their appropriate places. This is well and good, but at some point, you might see reusable modules arising in those
plethora of codes, [clinical-meteor/cookbook](https://github.com/clinical-meteor/cookbook/blob/master/table-of-contents.md) recommends:

> Create a /packages directory in the root directory, and refactor code out of your application into reusable modular packages. If you're not familiar with maintaining larger, modularized applications, the general feel of it will be that of moving code between files, and moving files between directories. You can use packages to create Javascript namespaces and dependencies.

In even shorter summary, "Refactor out those reusable modules".

### Packages

Meteor's package manager hosts their packages in [atmosphere](https://atmospherejs.com/) and also npm in Meteor 1.3. There are thousands of packages, thus when encountering a problem, search for a package. Ensure that the package contains the up-to-date code (another good heuristics is many downloads).

If none matches your criteria of whatever, [package it yourself](https://atmospherejs.com/i/publishing) and maybe even publish it.

## Testing

This will be a complicated issue, and there will be new instructions in less than a month (release of Meteor 1.3 in late Febuary). To summarize, until recently, the developers for the testing code base is handled by Velocity team, as summarized in this [link](http://xolv.io/velocity-announcement).

Velocity have built [testing tools](https://github.com/meteor-velocity/velocity) for:

* **[sanjo:jasmine](https://meteor-testing.readme.io/docs/getting-started)**: Jasmine syntax for unit/integration/acceptance testing.
* **[chimp.js](https://chimp.readme.io/docs/getting-started-with-meteor-cucumber)**: Acceptance testing tool, built via selenium and webdriver.io. You use cucumber syntax to write .feature files.
* **[mike:mocha](https://github.com/mad-eye/meteor-mocha-web/)**: Mocha syntax for unit/integration/acceptance testing.

## ES6 Javascript

Solves a lot of problem in ES5. For instance, handing in a callback to a function:

```javascript
function fooClass() {
  this.foobar = "hey doge";
  
  this.fooStuff = function() {
    console.log(this.foobar);
  };
  
  $(window).resize(this.fooStuff);
}
```

The context of this is not really of `fooClass`, but rather, whoever calls this.fooStuff in `$(window).resize`. The solution in ES5 is:

```javascript
function fooClass() {
  this.foobar = "hey doge";
  
  this.fooStuff = function() {
    console.log(this.foobar);
  };
  
  $(window).resize(this.fooStuff.bind(this));
}
```

Or introducing some `var self = this;` on outer scope. This is ugly.
 
In ES6, you can capture the lexical this, thus:

```javascript
function fooClass() {
  this.foobar = "hey doge";
  
  this.fooStuff = () => {
    console.log(this.foobar);
  };
  
  $(window).resize(this.fooStuff.bind);
}
```

guarantees you that the this is of fooClass. Not to mention, you can actually use a `class` and `extends` syntax.

## Misc
* tap:i18n: Internationalization.
* iron:router: Client/Server side routing.

## Further Reading
* [clinical-meteor/cookbook](https://github.com/clinical-meteor/cookbook/blob/master/table-of-contents.md)
* [babel-es6 polyfill](http://babeljs.io/docs/learn-es2015/#classes)