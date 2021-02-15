import React from "react"
import MyRouter from "components/Router";
const App = () => {
  return (
    <div className="App">
      <MyRouter/>
      <footer>
      <span>&copy; {new Date().getFullYear()} 박백김하</span>
      </footer>
    </div>
  );
}

export default App;
