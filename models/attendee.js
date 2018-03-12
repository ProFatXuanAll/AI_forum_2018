const mongoose = require( 'mongoose' );

const attendeeSchema = mongoose.Schema( {
	"firstName": String,
    "lastName": String,
    "email": String,
    "organization": String,
    "phone": String,
    "fee": Number,
    "taai": String,
    "dietary": String,
    "memo": String
} );

const Attendee = mongoose.model( 'Attendee', attendeeSchema );

module.exports = Attendee;
