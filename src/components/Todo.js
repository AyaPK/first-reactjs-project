import React from "react";

function Todo(props) {
    const name = props.name;
    var status = props.status;
    const id = props.id;

    return (
        <li className="todo stack-small">
        <div className="c-cb">
          <input id={id} type="checkbox" defaultChecked={status} />
          <label className="todo-label" htmlFor={id}>
            {name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{name}</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">Eat</span>
          </button>
        </div>
      </li>
    );
  }

export default Todo;
  