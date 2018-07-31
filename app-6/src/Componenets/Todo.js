import React from 'react';

const Todo = props => {
  let lists = props.todoList.map((val, i) => <h4 id={i}>{val}</h4>);
  return <div>{lists}</div>;
};

export default Todo;
