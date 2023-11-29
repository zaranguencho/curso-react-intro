import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import { TodoCounter } from './components/Todocounter/TodoCounter';
import {TodoSearch} from './components/TodoSearch/TodoSearch'
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

const defaultTodos = [
  {text: 'cortar cebolla', completed : false},
  {text: 'curso de react js', completed : true},
  {text: 'Llorar con la llorona', completed : false},
  {text: 'sí', completed : false},
]



function App(){
  const[todos,] = React.useState(defaultTodos)

  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo =>
    !!todo.completed
  ).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) =>{
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }

  )


  console.log('Los usuarios buscan ToDos de ' + searchValue)
  


  return (
    <React.Fragment>
    <TodoCounter completed={completedTodos} total={totalTodos} />
    <TodoSearch searchValue={searchValue}
    setSearchValue={setSearchValue}
    />

    <TodoList>
      {searchedTodos.map(todo =>(
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