require('shelljs/global');
var ejs = require('gulp-ejs');
var connect = require('gulp-connect');
var errorHandler = require('./errorHandler.js');
var fs = require('fs');
var gulp = require('gulp');
var karma = require('karma').server;
var open = require('gulp-open');

gulp.task('ci', [
  'lint',
  'assets',
  '_rspec',
  'karma'
]);

gulp.task('test', [
  'lint',
  '_cssCritic',
  '_rspec',
  'karma'
]);

gulp.task('karma', function (done) {
  karma.start({
    configFile: __dirname + '/../karma.config.js',
    browsers: ['PhantomJS'],
    singleRun: true
  }, done);
});

gulp.task('karma-debug', function (done) {
  karma.start({
    configFile: __dirname + '/../karma.config.js',
    browsers: ['Chrome'],
    singleRun: false,
    autoWatch: true
  }, done);
});

gulp.task('_createTestFileList', ['assets'], function(done) {
  fs.readdir('./test/css/components/', function(err, files) {
    if (err) { errorHandler.handleError(err, {callback: done}); }

    gulp.src('./test/css/regressionRunner.ejs')
      .pipe(ejs({
        files: files
      }, {
        ext: '.js'
      }))
      .pipe(gulp.dest('./test/css/'))
      .on('end', done);
  });
});

gulp.task('_serveTest', ['assets'], function() {
  connect.server({
    root: ['build'],
    port: 9001
  });
});

gulp.task('_cssCritic', ['lint', 'assets', '_createTestFileList'], function() {
  return gulp.src("./test/css/regressionRunner.html")
    .pipe(open("./test/css/regressionRunner.html",{app:"firefox"}));
});

gulp.task('_rspec', ['_serveTest'], function(done) {
  exec('rspec test/features', function(exitStatus) {
    if (exitStatus !== 0) {
      errorHandler.handleError('Exiting: Specs Failed', {isFatal: true});
    }
    connect.serverClose();
    done();
  });
});
