const express = require("express");
const router = express.Router();
const User = require("../schemas/user");



//회원가입
router.post("/Main", async (req,res) => {  //axios post Main으로 보내면 받아진다 
    try {
        const obj = {
            userName: req.body.userName,
            userId: req.body.userId,
            userPassword: req.body.userPassword,
            passwordCheck: req.body.passwordCheck,
            eMail: req.body.eMail
        };
        const user = new User(obj);
        await user.save();
        res.json({ message: "회원가입 완료!"}); //성공했을때 메시지 넘겨줌(login.js then에서 returndata.data.message 보내면)
    } catch (err) {
        console.log(err);
        res.json({message: false}); //실패했을때 메시지 넘겨줌
    }
});

//로그인
router.post("/login", async (req, res) => {
    try {
        const obj = {
            userId: req.body.userId,
            userPassword: req.body.userPassword
        };
        const user = await User.find(obj); //아이디 패스워드 가져온다
        console.log(user[0]);
        if (user[0]) {          //아이디 패스워드 맞는거 한개가 나오면
            console.log(req.body._id);
            res.json({ message: "로그인이 되었습니다!", _id: user[0]._id }); //id 값도 넘겨준다(cookie 세팅때문에)
        } else {
            res.json({ message: false });
        }
    } catch(err) {
        console.log(err);
        res.json({message: false}); //실패했을때 메시지 넘겨줌
    }
});