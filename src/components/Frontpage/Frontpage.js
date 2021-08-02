import React from "react";

function FrontPage() {
  return (
    <div className="main-body">
      <h1>
        <span>2</span>
        <span>0</span>
        <span>4</span>
        <span>8</span>
        <span id="gg">-Game</span>
      </h1>

      <button>Scroll down to play !</button>
      <div className="instructions">
        <h2>HOW TO PLAY:</h2>
        <div className="demo">
          <li>Use your arrow keys to move the tiles. </li>
          <li>Tiles with the same number merge into one when they touch. </li>
          <li>Add them up to reach 2048!</li>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
