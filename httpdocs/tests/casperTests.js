casper.test.begin('testing home contains stuff', 2, function suite(test) {

  casper.start('http://gulp-starter.loc/', function () {
  });


  casper.then(function () {
    test.assertTitle('Gulp Sarter');
    test.assertSelectorHasText('h1', 'Hello Gulp!');
    // this.click('button');
    // test.assertSelectorHasText('h1', 'New title');
    // console.log(JSON.stringify(casper.page, null, 2));
    this.capture('screenshots/test.png', {
      top: 0,
      left: 0,
      width: 500,
      height: 500
    });
  });

  // casper.thenOpenPath('/', function() {
  //   test.assertTitle('Test Page');
  //   test.assertSelectorHasText('h1', 'Hello Gulp!');
  // });

  casper.run(function() {
    test.done();
  });

});


casper.test.begin('testing other stuff', 1, function suite(test) {

  casper.start('http://gulp-starter.loc/', function () {

  });

  casper.then(function () {
    // test.assertTitle('Gulp Starter');
    test.assertSelectorHasText('p', 'Adding something for the screen shot!');
    // this.click('button');
    // test.assertSelectorHasText('h1', 'New title');
    // console.log(JSON.stringify(casper.page, null, 2));
    this.capture('screenshots/other.png', {
      top: 0,
      left: 0,
      width: 500,
      height: 500
    });
  });

  casper.run(function() {
    test.done();
  });


});


casper.test.on('exit', function () {
  // casper.echo('exit event for test', 'ERROR');
});


casper.on('run.complete', function () {
  // casper.echo("hi", 'ERROR');

  // get the successes and errors to echo out a message about them...

  // exit casper manually
  // casper.exit();

});



