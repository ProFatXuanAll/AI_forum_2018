const express = require( 'express' );

const config = require( '../settings/server/config' );

const route = express.Router();

const root_path = config.root;
const static_path = config.static;
const urls = {
    root: [
        { cname: '首頁', ename: 'home', url: '/' },
        { cname: '報名', ename: 'registration', url: '/registration' },
        { cname: '議程', ename: 'agenda', url: '/agenda' },
        { cname: '主協辦單位', ename: 'host', url: '/host' },
        { cname: '住宿資訊', ename: 'accommondation', url: '/accommondation' },
        { cname: '交通資訊', ename: 'location', url: '/location' },
        { cname: '聯絡方式', ename: 'contact', url: '/contact' },
    ],
    static: {
        logoBlack: '/images/logoBlack.png',
        logoWhite: '/images/logoWhite.png',
        headerCSS: '/css/header.css',
    },
}

urls.root.forEach( function( obj ) { obj.url = `${ root_path }${ obj.url }`} )
for( const name in urls.static ) {
    urls.static[ name ] = `${ static_path }${ urls.static[ name ] }`;
}

const urlSettings = ( req, res, next ) => {
    res.locals = { root: urls.root, static: urls.static };
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

route.get( '/accommondation', urlSettings, function( req, res ) {
    res.render( 'accommondation' );
} );

route.get( '/contact', urlSettings, function( req, res ) {
    res.render( 'contact' );
} );

route.get( '/host', urlSettings, function( req, res ) {
    res.render( 'host' );
} );

module.exports = route;
