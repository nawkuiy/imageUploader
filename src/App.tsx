import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="heading">Upload your image</div>
      <div className="instruction">File should be Jpeg, Png,...</div>
      <div className="imageContainer"></div>
    </div>
  );
}

export default App;
