const gulp = require( 'gulp' );

const eslint = require( 'gulp-eslint' );
const nodemon = require( 'gulp-nodemon' );

// lint task
gulp.task( 'eslint_backend', function() {
    return gulp.src( [ '**/*.js', '!node_modules/**', '!static/**' ] )
        .pipe( eslint( { configFile: 'settings/lint/eslint/backend.json' } ) )
        .pipe( eslint.format() );
} );
gulp.task( 'eslint_frontend', function() {
    return gulp.src( [ 'static/src/**/*.js' ] )
        .pipe( eslint( { configFile: 'settings/lint/eslint/frontend.json' } ) )
        .pipe( eslint.format() );
} );

// nodemon
gulp.task( 'start', function() {
    nodemon( {
        ext: 'js pug sass',
        script: 'server.js'
    } );
} );
