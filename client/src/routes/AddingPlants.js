import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    "& > * ": {
      textAlign: "center",
    },
  },
  form: {
    "& > * ": {
      margin: theme.spacing(0.5)
    },
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
  text: {
    width: "30ch",
  },
  currentFileName:{
    margin: theme.spacing(2)
  },
  submitButton: {
    marginTop: theme.spacing(6)
  }
}));

const AddingPlants = (props) => {
  const classes = useStyles();
  const [plantName, setPlantName] = useState("");
  const [plantType, setPlantType] = useState("");
  const [waterCycle, setWaterCycle] = useState("");
  const [origin, setOrigin] = useState("");
  const [isFile, setIsFile] = useState(false);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    document.title = "애완식물 추가";
  }, []);

  const handleFileChange = (event) => {
    const {name} = event.target.files[0];
    setFileName(name);
    setFile(event.target.files[0]);
    setIsFile(true);
  };

  const changePlantName = (event) => {
    const {target: {value}} = event;
    setPlantName(value);
  }
  const changePlantType = (event) => {
    const {target: {value}} = event;
    setPlantType(value);
  }
  const changeWaterCycle = (event) => {
    const {target: {value}} = event;
    setWaterCycle(value);
  }
  const changeOrigin = (event) => {
    const {target: {value}} = event;
    setOrigin(value);
  }

  return (
    <Paper className={classes.root}>
      <h2>식물 정보 입력하기</h2>
      <form className={classes.form}>
        <TextField
          className={classes.text}
          id="outlined-basic"
          label="식물 이름"
          variant="outlined"
          value={plantName}
          onChange={changePlantName}
          required
        />
        <TextField
          className={classes.text}
          id="outlined-basic"
          label="식물 종류"
          variant="outlined"
          value={plantType}
          onChange={changePlantType}
          required
        />
        <TextField
          className={classes.text}
          id="outlined-basic"
          label="하루 물 주기 빈도"
          variant="outlined"
          value={waterCycle}
          onChange={changeWaterCycle}
          required
        />
        <TextField
          className={classes.text}
          id="outlined-basic"
          label="원산지"
          variant="outlined"
          value={origin}
          onChange={changeOrigin}
          required
        />
        <p className={classes.currentFileName}>{isFile ? `파일 이름: ${fileName}` : "사진을 올려주세요"}</p>
        <Button variant="contained" component="label" color="primary">
          식물 사진 올리기
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        <Button className={classes.submitButton} variant="contained" component="label" color="secondary">
          제출하기
        </Button>
      </form>
    </Paper>
  );
};
export default AddingPlants;
