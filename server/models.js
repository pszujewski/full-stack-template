const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const shelterSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    zipcode: {type: String, required: true},
    state: {type: String, required: true},
    animals: [{
        type: {type: String},
        name: {type: String},
        age: {type: String},
        status: {type: String},
        image: {type:String }
    }]
})

// Define static and instance methods
// Example
shelterSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
}

shelterSchema.virtual('locationString').get(function() {
    return `${this.address} ${this.city}, ${this.state}, ${this.zipcode}`.trim()
});

shelterSchema.methods.apiRepr = function() {
    return {
        id: this._id,
        name: this.name,
        location: this.locationString,
        email: this.email,
        animals: this.animals   
    }
}

shelterSchema.methods.validatePassword = function(inputPw) {
    return bcrypt.compare(inputPw, this.password);
}


const Shelter = mongoose.model('shelters', shelterSchema);

module.exports = { Shelter };