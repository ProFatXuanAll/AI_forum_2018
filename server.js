const express = require( 'express' );

const config = require( './settings/server/config' );
const home = require( './routes/home' );

const server = express();

server.listen( config.port );

server.set( 'view engine', 'pug' );

server.use( express.static( 'static/dist' ) );
server.use( '/', home );
