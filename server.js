const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const config = require( './settings/server/config' );
const urls = require( './routes/urls' );

const server = express();

server.listen( config.port );

server.set( 'view engine', 'pug' );

server.use( bodyParser.json() );
server.use( bodyParser.urlencoded( { extended: true } ) );
server.use( config.static, express.static( 'static/dist' ) );
server.use( config.root, urls );
