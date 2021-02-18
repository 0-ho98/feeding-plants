const mongoose = require("mongoose");


const {Schema} = mongoose;
const userSchema = new Schema({
    userId:{
        type: String,
        required: true, //(== not null)
        unique: true //userId라는 필드는 고유의 필드를 갖겠다(==primary key)
    },
    userPassword:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    birthday:{
        type: Date,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    eMail:{
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model("User", userSchema);