import React from "react";
import { Link } from "react-router-dom";
import "components/Header.css";
const Header = (props) => {
  const { isLogin } = props;
  return (
    <header>
      {isLogin ? (
        <Link className="login" to="/">
          <h1 className="loginHeader">Feeding Plants</h1>
        </Link>
      ) : (
        <Link className="nomember" to="/">
          <div>
            <h1 className="nomemberHeader1">Feeding</h1>
            <h1 className="nomemberHeader2">Plants</h1>
          </div>
        </Link>
      )}
    </header>
  );
};
export default Header;
