import { useState } from "react";
import "./style.less";

function App() {
  return (
    <>
      <div className="layout">
        <div className="canvas">
          <div className="header-tools">
            <p>一个简单绘图面板</p>
          </div>
          <div className="canvas-content">
            <canvas id="canvas"></canvas>
          </div>
        </div>
        <div className="tool"></div>
      </div>
    </>
  );
}

export default App;
