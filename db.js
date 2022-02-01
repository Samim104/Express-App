const bcrypt = require('bcrypt');
const colors = require('colors');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('> Connected...'.green))
    .catch(err => console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red))
const schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    pass: {
        required: true,
        type: String
    }
})
schema.pre('save',async function(next){
    this.pass= await bcrypt.hash(this.pass,10)
    next();
})
const collections = new mongoose.model('user', schema);
module.exports = collections;