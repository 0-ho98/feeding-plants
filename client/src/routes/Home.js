import React,{useEffect} from "react";
import "routes/Home.css"
const Home = (props) => {
  const { isLogin } = props;
  console.log(isLogin);
  useEffect(() => {
    document.title="홈";
  }, [])
  return (
    <main>
      <section className="firstSection">
        <div className="imageContainer">
          <img src="https://cdn.pixabay.com/photo/2018/03/04/09/51/space-3197611_1280.jpg" alt="식물과 벽의 조화" />
        </div>
      </section>
      {isLogin ? (
        <section className="loginHome">로그인 됨</section>
      ) : (
        <section className="nomemberHome">
          <p>
            Feeding Plants는 애완식물을 키우는 사람들을 위해 만들어졌습니다.
          </p>
        </section>
      )}
    </main>
  );
};
export default Home;
