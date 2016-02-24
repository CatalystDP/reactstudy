/**
 * Created by taddeng on 2015/11/10.
 */
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
    return gulp.src("src/**/*.js")
        .pipe(babel({
            presets:['react']
        }))
        .pipe(gulp.dest("dist"));
});
//gulp.task('watch',['default'],function(){
//    gulp.watch('./src',['default']);
//});