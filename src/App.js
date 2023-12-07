import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import { TodoCounter } from './components/Todocounter/TodoCounter';
import {TodoSearch} from './components/TodoSearch/TodoSearch'
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';


let parsedTodos;

function App(){
  
  const localStorageTodos = localStorage.getItem('TODOS_V1')

  if (!localStorageTodos) {
    localStorage.setItem('Todos_V1', JSON.stringify([]))
    parsedTodos = []
  } else{
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const saveTodos = (newTodos) =>{
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const[todos, setTodos] = React.useState(parsedTodos)

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

    const deleteTodo = (text) => {
    const newTodos =[...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1) 
    saveTodos(newTodos)
  }

      const completeTodo = (text) => {
      const newTodos =[...todos]
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      )
      newTodos[todoIndex].completed = true
      saveTodos(newTodos)
    }

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
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>

    <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;