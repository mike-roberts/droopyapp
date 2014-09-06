var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var livereload = require('gulp-livereload');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.sass, ['sass']).on('change', livereload.changed);

});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('build-ios', ['sass'], function(done) {
  sh.exec('cordova build ios');
  done();
});
gulp.task('build-android', ['sass'], function(done) {
  sh.exec('cordova build android');
  done();
});

gulp.task('build-all', ['build-ios', 'build-android']);

gulp.task('reload', ['build-all']);

gulp.task('prepare', function() {
  sh.exec('cordova prepare ios');
  sh.exec('cordova prepare android');
});

gulp.task('serve', ['prepare'], function() {
  sh.exec('ionic serve');
});

//gulp.task('serve', ['build-all'], function () {
//  sh.exec('cordova serve');
//});