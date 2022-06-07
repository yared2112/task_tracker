import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <Header />
      <Tasks />
      <AddTask />
    </div>
  );
}

export default App;
