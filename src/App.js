import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import { TodoCounter } from './components/Todocounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';


let parsedItem;


function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem('itemName')
  
  if (!localStorageItem) {
    localStorage.setItem('itemName', JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }
  
  const saveItem = (newItem) => {
    localStorage.setItem('itemName', JSON.stringify(newItem))
    setItem(newItem)
  }
  const [item, setItem] = React.useState(parsedItem)
  
  return [item, saveItem]
}



function App() {


  const [todos, saveItem] = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo =>
    !!todo.completed
  ).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveItem(newTodos)
  }

  const completeTodo = (text) => {
    const newItem = [...todos]
    const todoIndex = newItem.findIndex(
      (todo) => todo.text === text
    )
    newItem[todoIndex].completed = true
    saveItem(newItem)
  }

  console.log('Los usuarios buscan ToDos de ' + searchValue)



  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;