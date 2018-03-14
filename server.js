const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const fs = require( 'fs' );
const spdy = require( 'spdy' );

const config = require( './settings/server/config' );
const urls = require( './routes/urls' );

const ssl = {
    key: fs.readFileSync('./key/ssl.key'),
    cert: fs.readFileSync('./key/ssl.cert'),
};

const server = express();
const http2Server = spdy.createServer( ssl, server );

if( config.protocol === 'http' )
    server.listen( config.port );
else if ( config.protocol === 'https' )
    http2Server.listen( config.port );
else
    console.error( 'settings/server/config.js protocol not set!' );

server.set( 'view engine', 'pug' );

server.use( bodyParser.json() );
server.use( bodyParser.urlencoded( { extended: true } ) );
server.use( config.static, express.static( 'static/dist' ) );
server.use( config.root, urls );
