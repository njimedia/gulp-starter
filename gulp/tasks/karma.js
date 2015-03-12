var gulp = require('gulp'),
    karma = require('karma').server;

/**
 * Run test once and exit
 */
var karmaTask = function (done) {
  karma.start({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  }, function () {
    done();
  });
};

gulp.task('karma', karmaTask);

module.exports = karmaTask;