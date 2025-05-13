import React, { useState } from "react";

function ArrmapObj() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  const addTask = () => {
    setTasks([...tasks, `Task ${tasks.length + 1}`]);
  };

  return (
    <>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
      <button onClick={addTask}>Add Task</button>
    </>
  );
}

export default ArrmapObj;