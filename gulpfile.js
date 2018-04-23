var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    browserSync = require('browser-sync'),
    less = require('gulp-less'),
    mock = require('./src/mock'),
    toolurl = require('url');
gulp.task('less', function() {
    gulp.src("./stutic/less/*.less")
        .pipe(less())
        .pipe(gulp.dest('./stutic/css'))
})
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./src",
            middleware: function(req, res, next) {
                console.log(req.url)
                if (/\/api/g.test(req.url)) {
                    console.log('6666')
                    res.end(JSON.stringify(mock(req.url)))
                }
                next()
            }
        },
        port: 2222
    })
})
gulp.task('default', ['less', 'server'])