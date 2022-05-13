import React , {useState} from "react";

function Hook() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>You clicked {count} times</p>

        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <p>{count}</p>
      </div>
    );
  }

export default Hook