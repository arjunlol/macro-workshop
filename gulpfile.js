var gulp        = require("gulp"),
    watch       = require("gulp-watch"),
    sweetjs     = require("gulp-sweetjs"),
    browserSync = require("browser-sync").create(),
    plumber     = require("gulp-plumber");

// build our macros!
gulp.task("build", function() {
  return gulp
    .src("src/**/*.js")
    .pipe(plumber())
    .pipe(sweetjs({ readableNames: true }))
    .pipe(gulp.dest("dist/js"));
});

gulp.task("watch-build", ["build"], function(done) {
  browserSync.reload();
  done();
});

gulp.task("default", ["build"], function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch("src/**/*.js", ["watch-build"]);
});
