const {src, dest, series} = require('gulp')
const csso = require('gulp-csso')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const include = require('gulp-file-include');


function html() {
    return src('IndexCutVersion.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(dest('dist'))
}

function css() {
    return src('styles/**.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false

        }))
        .pipe(csso())
        .pipe(concat('index.css'))
        .pipe(dest('dist/styles'))
}

function clear() {
    return del('dist')
}

function js(){
    return src('scripts/**.js')
        .pipe(uglify())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('index.js'))
        .pipe(dest('dist/scripts'))
}

exports.build = series(clear, html, css, js)
exports.html = html
exports.css = css
exports.clear = clear
exports.js = js