const express = require( 'express' );
const pug = require( 'pug' );

const config = require( './settings/server/config' );
const home = require( './routes/home' );

const server = express();

server.listen( config.port );

server.set( 'view engine', 'pug' );

server.use( '/', home );
