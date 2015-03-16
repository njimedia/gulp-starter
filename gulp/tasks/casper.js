var spawn = require('child_process').spawn,
    gulp = require('gulp'),
    gutil = require('gulp-util');

gulp.task('casper', function () {
  var tests = [process.cwd() + '/httpdocs/tests/casperTests.js'];

  /**
   * what does spawn do?
   */
  // var casperChild = spawn('casperjs', ['test', '--auto-exit=no'].concat(tests));
  var casperChild = spawn('casperjs', ['test'].concat(tests));

  // if you don't want to capture the standard out yourself...
  // var casperChild = spawn('casperjs', ['test'].concat(tests), {
  //   stdio: 'inherit'
  // });


  /**
   * Listens to data coming in from stdout of the test scripts
   */
  casperChild.stdout.on('data', function (data) {
    gutil.log('CasperJS:', data.toString().slice(0, -1)); // Remove \n
  });

  /**
   * on close do stuff? what can we do?
   */
  casperChild.on('close', function (code) {
    var success = code === 0; // Will be 1 in the event of failure
    // Do something with success here
    console.log("casper child close?", success);

  });

});