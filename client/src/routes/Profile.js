import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import { Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "500px",
    margin: theme.spacing(8, 0, 0, 0),
    padding: theme.spacing(5, 1, 5, 1),
    background: "#fffffe",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
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

  useEffect(()=>{
    document.title= "프로필";
    if(buttonValue==="LOGIN"){
      history.push("/auth");
    }else if(buttonValue==="SIGNUP"){
      history.push("/signup");
    }
  },[buttonValue]);
  return (
    <main>
      <Paper>
      {isLogin ? (
        <div>
          <div className={classes.container}>
            <div>
              <img src="" alt="사용자의 사진" />
            </div>
            <div>사용자의 이름</div>
          </div>
          <Button variant="contained" color="secondary">
            LOGOUT
          </Button>
          {/* 그냥 아래 부분을 Home로 넘기자 */}
          <div className={classes.container}>
            <p>나의 식물 목록</p>
            <div>
              <img src="" alt="사용자의 사진" />
            </div>
            <div>식물의 이름</div>
          </div>
          
        </div>
      ) : (
        <div>
          <div className={classes.container}>
            <Alert className={classes.info} severity="info">
              사용자의 정보가 없습니다. 로그인 해주세요
            </Alert>
            <div className={classes.button}>
              <Button variant="contained" color="primary" onClick={()=>{setButtonValue("LOGIN")}}>
                LOGIN
              </Button>
              <Button variant="contained" color="secondary" onClick={()=>{setButtonValue("SIGNUP")}}>
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
