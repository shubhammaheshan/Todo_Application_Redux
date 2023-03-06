import React from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
// import uuid from "uuid";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { removeNote, updateNote, addNote, toggleNote } from "../reducers/noteSlice";

function TodoList() {
  const dispatch = useDispatch();
  const noteItems = useSelector((store) => store.note.noteData);

  const create = (newTodo) => {
    dispatch(addNote(newTodo));
  };

  const remove = (id) => {
    dispatch(removeNote(id));
  };

  const update = (id, updtedTask) => {
    dispatch(updateNote({ id, updtedTask }));
  };

  const toggleComplete = (id) => {
    dispatch(toggleNote(id));
  };

  const todosList = noteItems?.map((todo) => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      <ul>{todosList}</ul>
      <NewTodoForm createTodo={create} />
    </div>
  );
}

export default TodoList;
