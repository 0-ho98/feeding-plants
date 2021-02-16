import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";

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
  const [value, setValue] = useState(0);
  const { isLogin } = props;

  const handleClick = () => {
    if (value === 0) {
      console.log("첫번째");
    } else if (value === 1) {
      console.log("두번째");
    } else if (value === 2) {
      console.log("세번째");
    }
  };
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
            label="My Calendar"
            icon={<CalendarTodayIcon />}
            onClick={handleClick}
          />
          <BottomNavigationAction
            label="Add Calendar"
            icon={<AddIcon />}
            onClick={handleClick}
          />
          <BottomNavigationAction
            label="Setting"
            icon={<SettingsIcon />}
            onClick={handleClick}
          />
        </BottomNavigation>
      ) : (
        <>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/auth">로그인</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/profile">프로필</Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};
export default Navigation;
