const express = require("express");
const session = require('express-session');
const app = express();
const cors = require("express-session");
const connect = require("./schemas");


connect();

const corsOptions = {
    origin: true,
    credential:true
} // 동일기원 아니어도 가능

app.use(
    session({
        resave:false,
        saveUninitialized:true,
        secret:"plants",
        cookie: {
            httpOnly: true,
            secure: false
        }
    })
);

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

//app.use(routes 사용하는것);

app.listen(8080, ()=> {
    console.log("listen umm..umm..");
});