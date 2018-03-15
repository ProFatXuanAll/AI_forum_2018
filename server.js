const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const fs = require( 'fs' );
const spdy = require( 'spdy' );
const http = require( 'http' );

const config = require( './settings/server/config' );
const urls = require( './routes/urls' );

const ssl = {
    key: fs.readFileSync('./key/ssl.key'),
    cert: fs.readFileSync('./key/ssl.cert'),
};

const server = express();
const httpsServer = spdy.createServer( ssl, server );

server.set( 'view engine', 'pug' );

server.use( bodyParser.json() );
server.use( bodyParser.urlencoded( { extended: true } ) );
server.use( config.static, express.static( 'static/dist' ) );
server.use( config.root, urls );

/* 404 not found */
server.use( function( req, res, next ) {
    res.status( 404 ).render( '404' );
} );

/* 500 error */
server.use( function( err, req, res, next ) {
    console.error( err.stack );
    res.status( 500 ).render( '500' );
} );

// http server
if( config.protocol === 'http' ) {
    server.listen( config.port );
    console.log( `http server start up at port ${ config.port }` );
}
// https server
else if ( config.protocol === 'https' ) {
    // http redirect to https
    const httpServer = express();
    httpServer.listen( 8080 );
    httpServer.get( '*', function( req, res ) {
        res.redirect( `https://${ req.headers.host }${ req.url }` );
    } );

    // http setup
    httpsServer.listen( config.port );
    console.log( `https server start up at port ${ config.port }` );
}
else
    console.error( 'settings/server/config.js protocol not set!' );
