import React, { useState } from "react";
import "./styles.css";
import Todo from "./Todo";
import tod from "./tod";
const mit = val => {
  return (
    <div className="todo-list">
      <Todo key={val.id} task={val.task} />
    </div>
  );
};

function App() {
const [todos,settodos]=useState(tod);
  return <div className="App">{tod.map(mit)}</div>;
}
export default App;
