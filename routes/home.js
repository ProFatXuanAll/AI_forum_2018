const express = require( 'express' );

const config = require( '../settings/server/config' );

const route = express.Router();

const urlSettings = ( req, res, next ) => {
    let root_path = config.root;
    let static_path = config.static;
    let url = {
        root: {
            agenda: '/agenda',
            contact: '/contact',
            home: '/',
            host: '/host',
            location: '/location',
            registration: '/registration',
        },
        static: {
            logoBlack: '/images/logoBlack.png',
            logoWhite: '/images/logoWhite.png',
        },
    }
    for( const name of Object.keys( url.root ) )
    {
        if( res.locals[ name ] ) {
            throw new Error( `${name} already in res.locals` );
        }
        else {
            res.locals[ name ] = `${ root_path }${ url.root[ name ] }`
        }
    }
    for( const name of Object.keys( url.static ) )
    {
        if( res.locals[ name ] ) {
            throw new Error( `${name} already in res.locals` );
        }
        else {
            res.locals[ name ] = `${ static_path }${ url.static[ name ] }`
        }
    }
    next();
};

route.get( '/', urlSettings, function( req, res ) {
    res.render( 'index' );
} );

route.get( '/registration', urlSettings, function( req, res ) {
    res.render( 'registration' );
} );

route.post( '/registration', urlSettings, function( req, res ) {
    console.log( req.body.firstName );
    res.render( 'success' );
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

route.get( '/host', urlSettings, function( req, res ) {
    res.render( 'host' );
} );

module.exports = route;
