import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

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

  useEffect(() => {
    if (confirm) {
      history.push("/");
    } else if (confirm === false) {
      history.push("/profile");
    }
  }, [confirm]);

  return (
    <Paper className={classes.root}>
      <form className={classes.form}>
      <h2>로그인</h2>
        <TextField
          className={classes.text}
          id="outlined-basic"
          label="아이디"
          variant="outlined"
          required
        />
        <TextField
          className={classes.text}
          id="outlined-basic"
          label="비밀번호"
          variant="outlined"
          type="password"
          required
        />
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            // onClick={() => {
            //   setConfirm(true);
            // }}
            type="submit"
          >
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
