import React from "react";
import UserProfile from "../User";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProfile className="content" />
      </header>
    </div>
  );
}

export default App;
