'use strict';

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();



const path = {
  build: {
    html: 'build/',
    favicon: 'build/favicon',
    img: 'build/img',
    style: 'build/css',
    js: 'build/js',
  },
  src: {
    html: 'src/*.html',
    favicon: 'src/favicon/*',
    img: 'src/img/*.*',
    style: 'src/styles/style.scss',
    js: 'src/js/*.js'
  },
  watch: {
    html: 'src/*.html',
    favicon: 'src/favicon/*',
    img: 'src/img/*.*',
    style: 'src/styles/*.scss',
    js: 'src/js/*.js'
  },
  clean: './build'
};

function html() {
  return gulp
    .src(path.src.html)
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.stream());
}

function css() {
  return gulp
    .src(path.src.style)
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(path.build.style))
    .pipe(browserSync.stream());
}

function img() {
  return gulp
    .src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.build.img))
    .pipe(browserSync.stream());
}

function js() {
  return gulp
    .src(path.src.js)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.stream());
}

function favicon() {
  return gulp
    .src(path.src.favicon)
    .pipe(gulp.dest(path.build.favicon))
    .pipe(browserSync.stream());
}

function prod(done) {
  html();
  css();
  img();
  js();
  favicon();
  return done();
}

function watchChanges() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });
  
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.img, img);
  gulp.watch(path.watch.style, css);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.favicon, favicon);
}

exports.default = gulp.series(watchChanges);
exports.prod = gulp.series(prod);
