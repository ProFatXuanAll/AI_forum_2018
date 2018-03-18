const express = require( 'express' );
const mongoose = require( 'mongoose' );

const serverConfig = require( '../settings/server/config' );
const dbConfig = require( '../settings/database/config' );
const Attendee = require( '../models/attendee' );
const agenda = require( './agenda' );

const db = mongoose.connection;
db.on( 'error', console.error.bind( console, 'connection error:' ) );
db.once( 'open', () => {
    console.log( 'we are connected!' );
} );
mongoose.connect( dbConfig.url() );

const router = express.Router();

const root_path = serverConfig.url();
const static_path = serverConfig.staticUrl();

const urlSettings = ( req, res, next ) => {
    res.locals.root = root_path;
    res.locals.static = static_path;
    next();
};

router.use( urlSettings );

router.get( '/', function( req, res, next ) {
    res.render( 'index' );
} );

router.get( '/registration', function( req, res, next ) {
    res.render( 'registration' );
} );

router.post( '/registration', function( req, res, next ) {
  //let newAttendee = new Attendee( {
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   email: req.body.email,
  //   organization: req.body.organization,
  //   phone: req.body.phone,
  //   birth: req.body.birth,
  //   fee: req.body.fee,
  //   taai: req.body.taai,
  //   dietary: req.body.dietary,
  //   memo: req.body.memo
  //} );
  //newAttendee.save()
  //    .then( () => console.log( 'new attendee sign up!' ) )
  //    .catch( () => console.log( 'failed to sign up!' ) );
  //console.log( req.body );
  //res.render( 'success', {
  //    name: `${ req.body.firstName } ${ req.body.lastName }`,
  //    birth: req.body.birth,
  //    fee: req.body.fee,
  //} );
} );

router.use( '/agenda', agenda );

router.get( '/location', function( req, res, next ) {
    res.render( 'location' );
} );

router.get( '/accommondation', function( req, res, next ) {
    res.render( 'accommondation' );
} );

router.get( '/contact', function( req, res, next ) {
    res.render( 'contact' );
} );

router.get( '/host', function( req, res, next ) {
    res.render( 'host' );
} );

module.exports = router;
