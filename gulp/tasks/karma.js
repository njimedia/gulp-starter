var gulp = require('gulp'),
    karma = require('karma').server,
    kconfig = require('../../karma.conf.js');

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

gulp.task('test', karmaTask);

module.exports = karmaTask;