import React from "react";
import "./App.scss";
function App() {
  const name = "react";
  return (
    <>
      {/* 주석  */}
      <div className="react">
        <div className="react-div">
          {name === "react" && <h1>리액트입니다</h1>}
          <input />
        </div>
      </div>
    </>
  );
}

export default App;
