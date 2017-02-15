var mongoose = require('mongoose');
var Schema = mongoose.Schema;
UserSchema = new Schema({
	name:{type: String, required: true}
})


mongoose.model('User', UserSchema);
