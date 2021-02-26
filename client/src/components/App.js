import React, { useEffect, useState } from "react";
import MyRouter from "components/Router";
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const confirmUser = async() => {
    try {
      const response = await fetch('/user');
      const body = await response.json();
      setUserInfo(body);
      setIsLogin(true);
    } catch (error) {
      console.log(error.name);
    }
  }
  useEffect(()=>{
    confirmUser();
  },[isLogin]);
  return (
    <div className="App">
      <MyRouter isLogin={isLogin} setIsLogin={setIsLogin} />
      {isLogin ? (
        <button onClick={() => setIsLogin(false)}>
          로그아웃 했을 때로 바꾸기
        </button>
      ) : (
        <button onClick={() => setIsLogin(true)}>
          로그인 했을 때로 바꾸기
        </button>
      )}
      <footer>
        {/* footer css는 index.css에 있음 */}
        <hr />
        <div>&copy; {new Date().getFullYear()} 박백김하</div>
      </footer>
    </div>
  );
};

export default App;
