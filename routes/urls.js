const express = require( 'express' );
const mongoose = require( 'mongoose' );

const serverConfig = require( '../settings/server/config' );
const dbConfig = require( '../settings/database/config' );
const Attendee = require( '../models/attendee' );

const db = mongoose.connection;
db.on( 'error', console.error.bind( console, 'connection error:' ) );
db.once( 'open', () => {
    console.log( 'we are connected!' );
} );
mongoose.connect( dbConfig.url() );

const route = express.Router();

const root_path = serverConfig.url();
const static_path = serverConfig.staticUrl();
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

route.get( '/', urlSettings, function( req, res, next ) {
    res.render( 'index' );
} );

route.get( '/registration', urlSettings, function( req, res, next ) {
    res.render( 'registration' );
} );

route.post( '/registration', urlSettings, function( req, res, next ) {
    let newAttendee = new Attendee( {
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       organization: req.body.organization,
       phone: req.body.phone,
       birth: req.body.birth,
       fee: req.body.fee,
       taai: req.body.taai,
       dietary: req.body.dietary,
       memo: req.body.memo
    } );
    newAttendee.save()
        .then( () => console.log( 'new attendee sign up!' ) )
        .catch( () => console.log( 'failed to sign up!' ) );
    console.log( req.body );
    res.render( 'success', {
        name: `${ req.body.firstName } ${ req.body.lastName }`,
        birth: req.body.birth,
        fee: req.body.fee,
    } );
} );

route.get( '/agenda', urlSettings, function( req, res, next ) {
    res.render( 'agenda' );
} );

route.get( '/location', urlSettings, function( req, res, next ) {
    res.render( 'location' );
} );

route.get( '/accommondation', urlSettings, function( req, res, next ) {
    res.render( 'accommondation' );
} );

route.get( '/contact', urlSettings, function( req, res, next ) {
    res.render( 'contact' );
} );

route.get( '/host', urlSettings, function( req, res, next ) {
    res.render( 'host' );
} );

module.exports = route;
