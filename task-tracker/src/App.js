import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
