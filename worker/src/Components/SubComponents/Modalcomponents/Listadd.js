import React, { useState } from "react";
import Button from '@mui/material/Button';
const Listadd = ({messageList, setMessageList}) => {


  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    addTodo(input);
    setInput("");
  };

  const addTodo = (message) => {
    setMessageList([...messageList, message]);
  };

  const deleteTodo = (message) => {
    let deleteMessageIndex = messageList.indexOf(message);
    setMessageList([
      ...messageList.slice(0, deleteMessageIndex),
      ...messageList.slice(deleteMessageIndex + 1)
    ]);
  };

  return (
    <div id="app">
        <div id="form">
      <input
        id="form__input"
        type="text"
        value={input}
        onChange={changeHandler}
      />
      <Button style={{marginLeft:'5px'}} color="success" size="small" variant="outlined" onClick={submitHandler}>
        Add item
      </Button>
    </div>
    
     <br />
      <TodoList messageList={messageList} deleteTodo={deleteTodo} />
    
    </div>
  );
};




const TodoList = ({ messageList, deleteTodo }) => (
  <ol id="todolist">
    {messageList.map((message, index) => (
      <Todo message={message} deleteTodo={deleteTodo} key={index} />
    ))}
  </ol>
);

const Todo = ({ message, deleteTodo }) => {
  const handleSubmit = (event) => {
    deleteTodo(message);
  };

  return (
    <li id="todo">
      <span id="todo__label">{message + "  "}</span>
      <Button style={{marginLeft:'5px'}} color="error" variant="outlined" size="small" onClick={handleSubmit}>
        Delete
      </Button>
    </li>
  );
};


export default Listadd;
