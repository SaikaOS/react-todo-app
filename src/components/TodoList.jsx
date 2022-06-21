import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function TodoList({ todos, removeTasks }) {
  let [state, setState] = useState(false);
  return (
    <div className="flex flex-col h-36 w-7/12 mt-4">
      <TransitionGroup>
        {todos.map((todo) => (
          <CSSTransition key={todo.id} timeout={500} classNames="item">
            <div
              key={todo.id}
              className="border-2 border-slate-400 p-2 w-full rounded-md flex justify-between items-center mb-2"
            >
              <div className="flex items-center">
                <button
                  className={
                    todo.isCompleted
                      ? "border-2 rounded-md"
                      : "border-2 rounded-md p-2"
                  }
                  onClick={() =>
                    setState((todo.isCompleted = !todo.isCompleted))
                  }
                >
                  {todo.isCompleted && <MdOutlineDone color="white" />}
                </button>
                <p
                  className={
                    todo.isCompleted
                      ? "text-white text-xl ml-4 line-through"
                      : "text-white text-xl ml-4"
                  }
                >
                  {todo.title}
                </p>
              </div>
              <button className="" onClick={() => removeTasks(todo.id)}>
                <BsTrash color="white" />
              </button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default TodoList;
