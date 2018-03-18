const express = require( 'express' );
const router = express.Router();

router.get( '/', function( req, res ) {
    res.render( 'agenda' );
} );

router.get( '/hang_li', function( req, res ) {
    res.render( 'speaker/hang_li' );
} );

router.get( '/ee_peng_lim', function( req, res ) {
    res.render( 'speaker/ee_peng_lim' );
} );

router.get( '/hai_xun_wang', function( req, res ) {
    res.render( 'speaker/hai_xun_wang' );
} );

router.get( '/yu_ru_lin', function( req, res ) {
    res.render( 'speaker/yu_ru_lin' );
} );

router.get( '/yin_hsi_kuo', function( req, res ) {
    res.render( 'speaker/yin_hsi_kuo' );
} );

router.get( '/zhe_yuan_yan', function( req, res ) {
    res.render( 'speaker/zhe_yuan_yan' );
} );

router.get( '/ren_xian_jian', function( req, res ) {
    res.render( 'speaker/ren_xian_jian' );
} );

module.exports = router;
