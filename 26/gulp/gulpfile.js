function test(cb) {
    console.log(`Hello test`);
    cb();
  }
  const gulp = require('gulp');
  const cleanCSS = require('gulp-clean-css');
  function styles(){
    return gulp.src(`styles/*.css`)
    .pipe(cleanCSS({compatibility: `ie8`}))
    .pipe(gulp.dest(`dist`))
  }
  
  exports.default = test;
  exports.styles=styles;

