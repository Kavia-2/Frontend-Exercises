import React, { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const handleClick = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          backgroundColor: backgroundColor,
          padding: "50px",
          margin: "20px auto",
          width: "300px",
          borderRadius: "10px",
        
        }}
      >
        Background Color
      </div>
      <button
        onClick={handleClick}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;