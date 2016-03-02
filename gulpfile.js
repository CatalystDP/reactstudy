/**
 * Created by taddeng on 2015/11/10.
 */
var gulp = require("gulp");
var babel = require("gulp-babel");
var sourcemaps=require('gulp-sourcemaps');
var requireConvert=require('gulp-require-convert');
gulp.task("default", function () {
    return gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets:['react','es2015'],
            sourceMaps:true
        })).pipe(requireConvert())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist"));
});
//gulp.task('watch',['default'],function(){
//    gulp.watch('./src',['default']);
//});