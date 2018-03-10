const express = require( 'express' );

const config = require( '../settings/server/config' );

const route = express.Router();

const urlSettings = ( req, res, next ) => {
    let root = config.root;
    res.locals = {
        agenda: '/agenda',
        contact: '/contact',
        home: '/',
        host: '/host',
        location: '/location',
        accommodation: '/accommodation',
        logoBlack: '/images/logoBlack.png',
        logoWhite: '/images/logoWhite.png',
        registration: '/registration',
    };
    for( const name in res.locals ) {
        res.locals[name] = `${ root }${ res.locals[name] }`;
    }
    next();
};

route.get( '/', urlSettings, function( req, res ) {
    res.render( 'index' );
} );

route.get( '/registration', urlSettings, function( req, res ) {
    res.render( 'registration' );
} );

route.get( '/agenda', urlSettings, function( req, res ) {
    res.render( 'agenda' );
} );

route.get( '/location', urlSettings, function( req, res ) {
    res.render( 'location' );
} );

route.get( '/accommodation', urlSettings, function( req, res ) {
    res.render( 'accommodation' );
} );

route.get( '/contact', urlSettings, function( req, res ) {
    res.render( 'contact' );
} );

route.get( '/host', urlSettings, function( req, res ) {
    res.render( 'host' );
} );

module.exports = route;
