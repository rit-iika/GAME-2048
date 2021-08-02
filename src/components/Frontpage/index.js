import "./frontpage.css";
import FrontPage from "./Frontpage";
import React from "react";

function App1() {
  return (
    <div className="App1">
      <div class="context">
        <FrontPage />
      </div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App1;
