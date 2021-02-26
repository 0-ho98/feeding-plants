import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import { Paper } from "@material-ui/core";
import defaultUser from "assets/defaultUser.png";
const useStyles = makeStyles((theme) => ({
  // 공통
  container: {
    maxWidth: "500px",
    marginTop: theme.spacing(4),
    padding: theme.spacing(5, 1, 5, 1),
    background: "#fffffe",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  // 이 부분은 회원일 때
  profileInfo: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    "& > *": {
      margin:theme.spacing(1)
    },
  },
  logoutBox: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(3)
  },
  profilePhoto: {
    width: "150px",
    "& > *": {
      width: "100%",
    },
  },
  // 이 부분은 비회원 일 때
  info: {
    fontFamily: "Nanum Gothic,sans-serif",
  },
  button: {
    margin: theme.spacing(3, 0, 0, 0),
    display: "flex",
    justifyContent: "space-evenly",
    "& > *": {
      width: "30%",
    },
  },
}));

const Profile = (props) => {
  const { isLogin } = props;
  const [buttonValue, setButtonValue] = useState("");
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    document.title = "프로필";
    if (buttonValue === "LOGIN") {
      history.push("/auth");
    } else if (buttonValue === "SIGNUP") {
      history.push("/signup");
    }
  }, [buttonValue]);
  return (
    <main>
      <Paper>
        {isLogin ? (
          <div>
            <div className={classes.container}>
              <div className={classes.profileInfo}>
                <div className={classes.profilePhoto}>
                  <img src={defaultUser} alt="사용자의 사진" />
                </div>
                <div>
                  <span>이름: 박건형</span>
                  <span><i className="fas fa-pencil-alt"></i></span>
                </div>
              </div>
            </div>
            <div className={classes.logoutBox}>
              <Button variant="contained" color="secondary">
                LOGOUT
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className={classes.container}>
              <Alert className={classes.info} severity="info">
                사용자의 정보가 없습니다. 로그인 해주세요
              </Alert>
              <div className={classes.button}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setButtonValue("LOGIN");
                  }}
                >
                  LOGIN
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    setButtonValue("SIGNUP");
                  }}
                >
                  SIGNUP
                </Button>
              </div>
            </div>
          </div>
        )}
      </Paper>
    </main>
  );
};
export default Profile;
