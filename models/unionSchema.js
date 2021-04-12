const mongoose = require("mongoose")

const unionSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    level:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
        timestamps:true
    })


    const Union = mongoose.model("Union", unionSchema);
    module.exports =Union;