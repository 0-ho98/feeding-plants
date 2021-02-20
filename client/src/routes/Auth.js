import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    padding: theme.spacing(3),
  },
  form: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  text: {
    width: "30ch",
  },
  buttons: {
    width: "30ch",
    display: "flex",
    justifyContent: "space-evenly",
    "& > *": {
      width: "48%",
    },
  },
}));

const Auth = () => {
  const classes = useStyles();
  const history = useHistory();
  const [confirm, setConfirm] = useState("");
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await axios
      .post("/login", {
        userId,
        userPassword,
      })
      .then(() => {
        setConfirm(false);
      });
      const userData = await JSON.parse(data);
      if(userData.userId !== userId){
        console.log('없는 아이디 입니다.')
      }else if(userData.userPassword !== userPassword){
        console.log('비밀번호가 다릅니다.');
      }
    } catch (error) {
      console.log(error.name);
    }
  };

  const changeId = (event) => {
    const {
      target: { value },
    } = event;
    setUserId(value);
  };
  const changePassword = (event) => {
    const {
      target: { value },
    } = event;
    setUserPassword(value);
  };

  useEffect(() => {
    document.title= "로그인";
    if (confirm) {
      history.push("/");
    } else if (confirm === false) {
      history.push("/profile");
    }
  }, [confirm]);

  return (
    <Paper className={classes.root}>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <h2>로그인</h2>
        <TextField
          className={classes.text}
          id="outlined-basic"
          label="아이디"
          variant="outlined"
          value={userId}
          onChange={changeId}
          required
        />
        <TextField
          className={classes.text}
          id="outlined-basic"
          label="비밀번호"
          variant="outlined"
          type="password"
          value={userPassword}
          onChange={changePassword}
          required
        />
        <div className={classes.buttons}>
          <Button variant="contained" color="primary" type="submit">
            확인
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setConfirm(false);
            }}
          >
            취소
          </Button>
        </div>
      </form>
    </Paper>
  );
};
export default Auth;
