const gulp = require('gulp')
const del = require('gulp-clean')
const postcss = require('gulp-postcss')
const tailwindcss = require('tailwindcss')
const webpack = require('webpack-stream')
const browserSync = require('browser-sync').create()
const tailwindConfig = require('./tailwind.config.js')
const webpackConfig = require('./webpack.config.js')
const nesting = require('postcss-nesting')
const nested = require('postcss-nested')
const postImport = require('postcss-import')

function clean() {
	return gulp.src(['./dist'], {read: false, allowEmpty: true}).pipe(del())
}

function css() {
	return gulp
		.src('./src/assets/css/style.css')
		.pipe(
			postcss(
				[
					postImport,
					nested,
					nesting,
					tailwindcss(tailwindConfig),
					require('autoprefixer'),
				],
				{
					to: './dist/assets/css/style.css',
				}
			)
		)
		.pipe(gulp.dest('./dist/assets/css'))
		.pipe(browserSync.stream())
}

function js() {
	return gulp
		.src('./src/assets/js/index.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('./dist/assets/js'))
		.pipe(browserSync.stream())
}

function copyHtml() {
	return gulp
		.src('./src/*.html')
		.pipe(gulp.dest('./dist'))
		.pipe(browserSync.stream())
}

function copyImages() {
	return gulp
		.src('./src/assets/images/**')
		.pipe(gulp.dest('./dist/assets/images'))
}

function copySvgs() {
	return gulp
		.src('./src/assets/svgs/**')
		.pipe(gulp.dest('./dist/assets/svgs'))
}

// Use different configurations for development and production
const build = gulp.series(clean, gulp.parallel(css, js, copyImages, copySvgs, copyHtml))
const buildProduction = gulp.series(
	clean,
	gulp.parallel(css, js, copyImages, copySvgs, copyHtml)
)

function watch() {
	browserSync.init({
		server: {
			baseDir: './dist',
		},
	})

	gulp.watch('./src/assets/css/**/*.css', css)
	gulp.watch('./src/assets/js/**/*.js', js)
	gulp.watch('./src/assets/images/**', copyImages)
	gulp.watch('./src/assets/svgs/**', copySvgs)
	gulp.watch('./src/**/*.html').on(
		'change',
		gulp.series(copyHtml, css, browserSync.reload)
	)
}

exports.default = gulp.series(build, watch)
exports.build = buildProduction
