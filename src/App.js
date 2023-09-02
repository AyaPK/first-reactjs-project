import Todo from "./components/Todo"
import Form from "./components/Form"
import FilterButtonSection from "./components/FilterButtonSection";
import React, { useState } from "react";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      status={task.status}
      key={task.id}
    />
  ));
  

  function addTask(name) {
    const newTask = { id: "id", name, status: false };
    setTasks([...tasks, newTask]);
  }
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  return (    
    <div className="todoapp stack-large">
      <h1>Aya's To Do List</h1>
      
      <Form label="Add a task" addTask={addTask} />

      <FilterButtonSection />
      
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">      
        {taskList}
      </ul>
    </div>
  );
}

export default App;
