const gulp = require( 'gulp' );

const eslint = require( 'gulp-eslint' );
const sass = require( 'gulp-sass' );
const nodemon = require( 'gulp-nodemon' );

// lint task
gulp.task( 'eslint_backend', function() {
    return gulp.src( [ './**/*.js', '!node_modules/**', '!./static/**' ] )
        .pipe( eslint( { configFile: './settings/lint/eslint/backend.json' } ) )
        .pipe( eslint.format() );
} );
gulp.task( 'eslint_frontend', function() {
    return gulp.src( [ './static/src/**/*.js' ] )
        .pipe( eslint( { configFile: './settings/lint/eslint/frontend.json' } ) )
        .pipe( eslint.format() );
} );

// sass task
gulp.task( 'sass', function() {
    return gulp.src( './static/src/sass/**/*.sass' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( gulp.dest( './static/dist/css' ) )
} );

gulp.task( 'sass:watch', function() {
    gulp.watch( './sass/**/*.sass', [ 'sass' ] )
} );

// nodemon
gulp.task( 'start', [ 'sass' ], function() {
    nodemon( {
        ext: 'js pug sass',
        script: 'server.js'
    } );
} );
