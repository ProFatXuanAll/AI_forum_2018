const express = require( 'express' );

const route = express.Router();

const urlSettings = ( req, res, next ) => {
    res.locals = {
        agenda: '/agenda',
        contact: '/contact',
        home: '/',
        location: '/location',
        logoBlack: '/images/logoBlack.png',
        logoWhite: '/images/logoWhite.png',
        registration: '/registration',
    };
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

route.get( '/contact', urlSettings, function( req, res ) {
    res.render( 'contact' );
} );


module.exports = route;
