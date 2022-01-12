import React, { Fragment } from "react";

function App() {
  const name = "react";

  return (
    <div
      style={{
        backgroundColor: "blue",
        color: "red",
        fontSize: "48px",
        fontWeight: "bold",
        padding: 16,
      }}
    >
      {name === "react" && <h1>리액트입니1다</h1>}
    </div>
  );
}

export default App;
