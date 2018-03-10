const express = require( 'express' );

const config = require( './settings/server/config' );
const home = require( './routes/home' );

const server = express();

server.listen( config.port );

server.set( 'view engine', 'pug' );

server.use( config.static, express.static( 'static/dist' ) );
server.use( config.root, home );
