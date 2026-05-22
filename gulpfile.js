const gulp=require('gulp');
const sass=require('gulp-sass')(require('sass'));
const browserSync=require('browser-sync').create();
const useref=require('gulp-useref');
const terser=require('gulp-terser');
const gulpIf=require('gulp-if');
const cleanCSS=require('gulp-clean-css');
const sourcemaps=require('gulp-sourcemaps');
const cache=require('gulp-cache');

// ESM modules
let imagemin;
let deleteSync;

// ======================
// Browser Sync
// ======================
function browserSyncServe(done) {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });

  done();
}

// ======================
// Compile SCSS
// ======================
function styles() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded',
        silenceDeprecations: ['import']
      }).on('error',sass.logError)
    )
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
}

// ======================
// Watch Files
// ======================
function watchFiles() {
  gulp.watch('app/scss/**/*.scss',styles);
  gulp.watch('app/*.html').on('change',browserSync.reload);
  gulp.watch('app/js/**/*.js').on('change',browserSync.reload);
}

// ======================
// Optimize HTML/CSS/JS
// ======================
function buildUseref() {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js',terser()))
    .pipe(gulpIf('*.css',cleanCSS()))
    .pipe(gulp.dest('dist'));
}

// ======================
// Optimize Images
// ======================
async function images() {
  if(!imagemin) {
    imagemin=(await import('gulp-imagemin')).default;
  }

  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(
      cache(
        imagemin({
          interlaced: true
        })
      )
    )
    .pipe(gulp.dest('dist/images'));
}

// ======================
// Copy Fonts
// ======================
function fonts() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
}

// ======================
// Copy Assets
// ======================
function assets() {
  return gulp.src('app/assets/**/*')
    .pipe(gulp.dest('dist/assets'));
}

// ======================
// Copy SCSS
// ======================
function cscss() {
  return gulp.src('app/scss/**/*')
    .pipe(gulp.dest('dist/scss'));
}

// ======================
// Copy JS
// ======================
function cjs() {
  return gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));
}

// ======================
// Clean Dist
// ======================
async function clean() {
  if(!deleteSync) {
    ({deleteSync}=await import('del'));
  }

  deleteSync(['dist']);

  return cache.clearAll();
}

async function cleanDist() {
  if(!deleteSync) {
    ({deleteSync}=await import('del'));
  }

  return deleteSync([
    'dist/**/*',
    '!dist/images',
    '!dist/images/**/*'
  ]);
}

// ======================
// Build
// ======================
const build=gulp.series(
  cleanDist,
  styles,
  gulp.parallel(
    buildUseref,
    images,
    fonts,
    assets,
    cscss,
    cjs
  )
);

// ======================
// Watch
// ======================
const watch=gulp.parallel(
  browserSyncServe,
  watchFiles
);

// ======================
// Export Tasks
// ======================
exports.sass=styles;
exports.images=images;
exports.clean=clean;
exports.build=build;
exports.watch=watch;

exports.default=gulp.series(
  styles,
  watch
);