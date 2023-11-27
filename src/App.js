import { TodoList } from './components/TodoList/TodoList';
import { TodoCounter } from './components/Todocounter/TodoCounter';
import {TodoSearch} from './components/TodoSearch/TodoSearch'
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'cortar cebolla', completed : false},
  {text: 'curso de react js', completed : false},
  {text: 'Llorar con la llorona', completed : false},
  {text: 'sí', completed : false},
]

function App() {
  return (
    <React.Fragment>

    <TodoCounter completed={15} total={25} />
    <TodoSearch/>

    <TodoList>
      {defaultTodos.map(todo =>(
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        />
      ))}
    </TodoList>

    <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
