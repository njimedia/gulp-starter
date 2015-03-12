casper.test.begin('testing home contains stuff', 2, function suite(test) {

    casper.start('http://gulp-starter.loc/');

    casper.then(function () {
      test.assertTitle('Gulp Starter');
      test.assertSelectorHasText('h1', 'Hello Gulp!');
      // this.click('button');
      // test.assertSelectorHasText('h1', 'New title');
    });

    // casper.thenOpenPath('/', function() {
    //   test.assertTitle('Test Page');
    //   test.assertSelectorHasText('h1', 'Hello Gulp!');
    // });

    casper.run(function() {
      test.done();
    });

});