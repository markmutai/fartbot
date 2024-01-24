const siteName = "fartBot";
const siteColour = "FFE01A";
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webp = require("gulp-webp");
const minifyCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const changed = require("gulp-changed");
const realFavicon = require('gulp-real-favicon');
const exec = require('child_process').exec;
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const FAVICON_DATA_FILE = 'faviconData.json';
const sass_src = "./src/assets/sass/*.scss";
const sass_dest = "./src/assets/css";


// ---------------------------------------------functions

function imgCompress() {
    return gulp
        .src("./src/assets/img/**/*.{png,svg,jpg}", {
            base: "img",
        })
        .pipe(webp())
        .pipe(gulp.dest("./src/"));
};

// function twMini() {
//     return gulp
//         .src("./src/tailwind.css")
//         .pipe(
//             minifyCSS({
//                 compatibility: "ie8",
//             })
//         )
//         .pipe(rename("tailwind.min.css"))
//         .pipe(gulp.dest("./src/"));
// };


// ---------------------------------------------tasks

gulp.task("compile_sass", async function () {
    gulp
        .src(sass_src)
        .pipe(sass().on("error", sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(changed(sass_dest))
        .pipe(gulp.dest(sass_dest));
});

gulp.task("compile_css", async function () {
    return gulp.src(sass_src)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(sass_dest));
});

gulp.task("watchMeDoMyTing", function () {
    browserSync.init({
        watch: true,
        server: false,
        port: 3010,
        ui: {
            port: 3020
        },
    });
    gulp.watch(sass_src, gulp.series("compile_sass"));
    gulp.watch("./src/assets/sass/*.scss").on("change", reload);
    gulp.watch("./src/assets/css/*.css").on("change", reload);
    gulp.watch("./src/**/*.js").on("change", reload);
    // gulp.watch("./src/tailwind.css").on("change", twMini);
    gulp.watch("./src/tailwind.min.css").on("change", reload);
    gulp.watch("./src/assets/img/*").on("add", imgCompress, reload);
});

/* gulp.task("tw", async function () {
    twMini();
}); */

gulp.task("webp", async function () {
    imgCompress();
});

gulp.task('fav', function (done) {
    realFavicon.generateFavicon({
        masterPicture: './favicon.png',
        dest: './public',
        iconsPath: '/',
        design: {
            ios: {
                pictureAspect: 'noChange',
                assets: {
                    ios6AndPriorIcons: false,
                    ios7AndLaterIcons: false,
                    precomposedIcons: false,
                    declareOnlyDefaultIcon: true
                },
                appName: { siteName }
            },
            desktopBrowser: {
                design: 'background',
                backgroundColor: `#${siteColour}`,
                backgroundRadius: 0.2,
                imageScale: 0.8
            },
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: `#${siteColour}`,
                onConflict: 'override',
                assets: {
                    windows80Ie10Tile: false,
                    windows10Ie11EdgeTiles: {
                        small: false,
                        medium: true,
                        big: false,
                        rectangle: false
                    }
                },
                appName: { siteName }
            },
            androidChrome: {
                pictureAspect: 'backgroundAndMargin',
                margin: '13%',
                backgroundColor: `#${siteColour}`,
                themeColor: `#${siteColour}`,
                manifest: {
                    name: { siteName },
                    display: 'standalone',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                },
                assets: {
                    legacyIcon: false,
                    lowResolutionIcons: false
                }
            },
            safariPinnedTab: {
                pictureAspect: 'blackAndWhite',
                threshold: 58.59375,
                themeColor: `#${siteColour}`
            }
        },
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false,
            readmeFile: false,
            htmlCodeFile: true,
            usePathAsIs: false
        },
        markupFile: FAVICON_DATA_FILE
    }, function () {
        done();
    });
});

gulp.task('splash', function (cb) {
    exec('pwa-asset-generator logo_splashscreen.svg ./splash/ --splash-only --xhtml --single-quotes --background "rgb(0,17,48)" --quality 90 --padding "calc(37vh - 5%) calc(37vw - 10%)"', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})

/* 
gulp.task('yrn', function (cb) {
    exec('yarn start & yarn tw', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
}) 
*/


// --------------------------------------------- run

gulp.task("default", gulp.series("webp", "compile_sass", "compile_css", "watchMeDoMyTing"));
