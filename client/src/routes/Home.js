import React from "react";

const Home = (props) => {
    const {isLogin} = props;
    console.log(isLogin);
    return(
        <main>
            {isLogin ? <h1>로그인 됨</h1>:<h1>로그인 안됨</h1>}
        </main>
    )
}
export default Home;