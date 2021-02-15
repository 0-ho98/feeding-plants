import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
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
    </nav>
  );
};
export default Navigation;
