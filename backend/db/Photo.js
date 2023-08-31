const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    title:String,
    location:String,
    img:{
        data:Buffer,
        contentType:String
    },
    favourite:{
        type:Boolean,
        default:false,
    }
},
{
    collection:"photos"
});

module.exports = mongoose.model("photos",photoSchema);