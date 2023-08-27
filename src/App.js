import Todo from "./components/Todo"
import Form from "./components/Form"
import FilterButtonSection from "./components/FilterButtonSection";

function App(props) {
  const taskList = props.tasks.map((task) => 
    <Todo id={task.id} name={task.name} status={task.status} key={task.id} />
  );

  return (    
    <div className="todoapp stack-large">
      <h1>Aya's To Do List</h1>
      
      <Form label="Add a task" />

      <FilterButtonSection />
      
      <h2 id="list-heading">3 tasks remaining</h2>
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
