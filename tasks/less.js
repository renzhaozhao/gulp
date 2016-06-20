'use strict';

var config = require('./config');
var settings = config.settings;

var gulp = require('gulp');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var clone = require("gulp-clone");
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

module.exports = function(callback) {
    var stream, uncompressStream, compressStream;
    var distPath = config.releasePath + '/css';
    var srcPath = config.projectPath + config.lessSource + '*.less';

    stream = gulp.src(srcPath)
        .pipe(plumber(settings.plumber))
        .pipe(less())
        .pipe(prefix(settings.prefix));

    uncompressStream = stream.pipe(clone());
    compressStream = stream.pipe(clone());

    uncompressStream.pipe(rename(settings.rename.css))
        .pipe(gulp.dest(distPath));

    compressStream = stream.pipe(minify())
        .pipe(rename(settings.rename.minCss))
        .pipe(gulp.dest(distPath))
        .on('end', callback)
}
