var gulp = require("gulp"),
    browerSync = require("browser-sync"),
    less = require("gulp-less"),
    mock = require("./src/mock");
gulp.task("less", function() {
    gulp.src("./src/static/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("./src/static/css"))
})
gulp.task("server", function() {
    browerSync.init({
        server: {
            baseDir: "./src",
            index: "page/index.html"
        },
        files: ["src"],
        port: 8083,
        host: "localhost",
        middleware: function(req, res, next) {
            if (/\api/g.test(req.url)) {
                res.end(JSON.stringify(
                    mock(req.url)
                ))
            }
            next();
        }
    })
});
gulp.task("watch", function() {
    gulp.watch("./src/static/less/*.less", ["less"])
});
gulp.task("default", ["less", "server"])