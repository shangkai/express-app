/**
 * Created by shangkai on 15/5/8.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    // yay!
});


var UserSchema = mongoose.Schema({
    name: String,
    email:String,
    password:String
});


var User = mongoose.model('User', UserSchema);


exports.User = User;