import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: 0,
    left: 0,
    position: "fixed",
    background: "white",
    zIndex: 100,
  },
});

const Navigation = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(0);
  const { isLogin } = props;

  const handleClickInMember = () => {
    if (value === 0) {
      console.log("첫번째");
      history.push("/");
    } else if (value === 1) {
      console.log("두번째");
      history.push('/adding-plants');
    } else if (value === 2) {
      console.log("세번째");
      history.push('/profile');
      
    }
  };
  const handleClickInNomember = () => {
    if (value === 0) {
      console.log("첫번째");
      history.push("/");
    } else if (value === 1) {
      console.log("두번째");
      history.push('/profile');
    }
  }
  useEffect(()=>{
    if(isLogin){
      handleClickInMember();
    }else{
      handleClickInNomember();
    }
    
  },[value])
  return (
    <nav>
      {isLogin ? (
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon/>}
          />
          <BottomNavigationAction
            label="Add Plants"
            icon={<AddIcon />}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<PermIdentityIcon />}
          />
        </BottomNavigation>
      ) : (
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon/>}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<PermIdentityIcon />}
          />
        </BottomNavigation>
      )}
    </nav>
  );
};
export default Navigation;
