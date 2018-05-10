const express = require( 'express' );
const mongoose = require( 'mongoose' );

const serverConfig = require( '../settings/server/config' );
const Attendee = require( '../models/attendee' );
const agenda = require( './agenda' );

const router = express.Router();

const root_path = serverConfig.url();
const static_path = serverConfig.staticUrl();

const urlSettings = ( req, res, next ) => {
    res.locals.root = root_path;
    res.locals.static = static_path;
    next();
};

router.use( urlSettings );

router.get( '/', function( req, res, next ) {
    res.render( 'index' );
} );

router.get( '/registration', function( req, res, next ) {
    res.render( 'registration' );
} );

router.use( '/agenda', agenda );

router.get( '/activity', function( req, res, next ) {
    res.render( 'activity' );
} );

router.get( '/location', function( req, res, next ) {
    res.render( 'location' );
} );

router.get( '/accommondation', function( req, res, next ) {
    res.render( 'accommondation' );
} );

router.get( '/contact', function( req, res, next ) {
    res.render( 'contact' );
} );

router.get( '/host', function( req, res, next ) {
    res.render( 'host' );
} );

module.exports = router;
