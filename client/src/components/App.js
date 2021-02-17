import React from "react"
import MyRouter from "components/Router";
const App = () => {
  return (
    <div className="App">
      <MyRouter/>
      <footer>
        {/* footer css는 index.css에 있음 */}
        <hr/>
      <div>&copy; {new Date().getFullYear()} 박백김하</div>
      </footer>
    </div>
  );
}

export default App;
