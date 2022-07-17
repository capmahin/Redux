import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <h1>The Count is:{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
}

export default App;
