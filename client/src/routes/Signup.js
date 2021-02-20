import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Alert from "@material-ui/lab/Alert";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { Paper } from "@material-ui/core";
import { TramRounded } from "@material-ui/icons";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    // height: "700px",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    width: "29ch",
  },
  buttons: {
    width: "30ch",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "50px",
    "& > *": {
      width: "48%",
    },
  },
}));

const Signup = () => {
  const history = useHistory();
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordDigitsError, setPasswordDigitsError] = useState(false);
  const [eMail, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [confirm, setConfirm] = useState("");
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  useEffect(() => {
    document.title = "회원가입";
    if (confirm) {
      history.push("/");
    } else if (confirm === false) {
      history.push("/profile");
    }
  }, [confirm]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (idError || passwordError || passwordDigitsError) {
        console.log('아노딤');
        return false;
      } else {
        const data = await axios.post("/Main", {
          userName,
          userId,
          userPassword,
          eMail,
          birthday,
          gender,
        });
        const userData = await JSON.parse(data);
      }
    } catch (error) {
      console.log(error.name);
    }
  };

  const onChangeName = (event) => {
    const {
      target: { value },
    } = event;
    setUserName(value);
  };
  const onChangeId = (event) => {
    const {
      target: { value },
    } = event;
    setUserId(value);
  };
  const onChangePassword = (event) => {
    const {
      target: { value },
    } = event;
    setUserPassword(value);
    if (value.length < 8) {
      setPasswordDigitsError(true);
    } else {
      setPasswordDigitsError(false);
    }
    if(passwordCheck !== value){
      setPasswordError(true);
    }
  };
  const onChangePasswordCheck = (event) => {
    const {
      target: { value },
    } = event;
    if (userPassword === value) {
      setPasswordError(false);
      setPasswordCheck(value);
    } else {
      setPasswordError(true);
      setPasswordCheck(value);
    }
  };
  const onChangeEmail = (event) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
  };
  const onChangeBirthday = (event) => {
    const {
      target: { value },
    } = event;
    setBirthday(value);
  };
  const onChangeGender = (event) => {
    const {
      target: { value },
    } = event;
    setGender(value);
  };

  return (
    <Paper className={classes.root}>
      <form
        onSubmit={handleFormSubmit}
        className={classes.form}
        onSubmit={handleFormSubmit}
        autoComplete="off"
      >
        <h1>회원가입</h1>
        <TextField
          id="outlined-basic1"
          label="이름"
          variant="outlined"
          name="userName"
          value={userName}
          onChange={onChangeName}
          className={classes.input}
          required
        />
        <TextField
          id="outlined-basic2"
          label="아이디"
          variant="outlined"
          name="userId"
          value={userId}
          onChange={onChangeId}
          className={classes.input}
          required
        />
        {/* {idError && <Alert severity="error">아이디가 중복됩니다.</Alert>} */}
        <TextField
          id="outlined-basic3"
          label="비밀번호"
          type="password"
          variant="outlined"
          name="userPassword"
          value={userPassword}
          onChange={onChangePassword}
          className={classes.input}
          required
        />
        {passwordDigitsError ? (
          <Alert severity="error">
            문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요
          </Alert>
        ) : (
          ""
        )}
        <TextField
          id="outlined-basic4"
          label="비민번호 확인"
          type="password"
          variant="outlined"
          name="userPasswordConfirm"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          className={classes.input}
          required
        />
        {passwordError && (
          <Alert severity="error">비밀번호를 동일하게 입력해주세요.</Alert>
        )}
        <TextField
          id="outlined-basic5"
          label="이메일"
          type="email"
          variant="outlined"
          name="eMail"
          value={eMail}
          onChange={onChangeEmail}
          className={classes.input}
          required
        />
        <TextField
          id="date"
          label="생년월일"
          name="birthday"
          type="date"
          value={birthday}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChangeBirthday}
          className={classes.input}
          required
        />
        <FormControl className={classes.formControl} required>
          <InputLabel id="demo-simple-select-label">성별: </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="gender"
            id="demo-simple-select"
            value={gender}
            onChange={onChangeGender}
            className={classes.input}
            required
          >
            <MenuItem value="남자">남자</MenuItem>
            <MenuItem value="여자">여자</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            // onClick={() => {
            //   setConfirm(true);
            // }}
            type="submit"
          >
            회원가입
          </Button>
          <Button
            type="submit"
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
export default Signup;
