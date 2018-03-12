const express = require( 'express' );

const config = require( '../settings/server/config' );

const route = express.Router();

const root_path = config.root;
const static_path = config.static;
const urls = {
    root: [
        { cname: '聯絡方式', ename: 'contact', url: '/contact' },
        { cname: '交通資訊', ename: 'location', url: '/location' },
        { cname: '住宿資訊', ename: 'accommondation', url: '/accommondation' },
        { cname: '主協辦單位', ename: 'host', url: '/host' },
        { cname: '議程', ename: 'agenda', url: '/agenda' },
        { cname: '報名', ename: 'registration', url: '/registration' },
        { cname: '首頁', ename: 'home', url: '/' },
    ],
}

urls.root.forEach( function( obj ) { obj.url = `${ root_path }${ obj.url }`} )

const urlSettings = ( req, res, next ) => {
    res.locals = { root: urls.root };
    res.locals.static = static_path;
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
