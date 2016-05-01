![](http://f.cl.ly/items/391y4708420P0H001k1G/meteoric.png)

# Meteor Ionic Demo

This is a demo of the various [Meteoric](https://github.com/meteoric124) packages:

- [meteoric124:meteoric](https://github.com/meteoric124/meteoric)
- [meteoric124:meteoric-sass](https://github.com/meteoric/ionic-sass)
- [meteoric:autoform-ionic](https://github.com/meteoric124/meteoric-sass)
- [meteoric:useraccounts-ionic](https://github.com/meteoric/useraccounts-ionic)

See it in action here: [http://meteoric-demo.com/](http://meteoric-demo.com/)

# Acceptance Testing

This demo is also used for testing when duplicating original ionic. This is because styling changes break things,
or simply that we want new features to behave as we expected.

## To run:

```bash
npm install -g chimp
# cd <meteoric-demo>/tests
chimp --jasmine --ddp=http://localhost:3000
```

## License
[MIT License](https://github.com/meteoric/demo/blob/master/LICENSE)
