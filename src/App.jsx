import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import { TodoCounter } from './components/Todocounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { useLocalStorage } from './components/useLocalStorage/useLocalStorage';


function App() {

  const {item, saveItem, loading, error} = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = item.filter(todo =>
    !!todo.completed
  ).length
  const totalTodos = item.length

  const searchedTodos = item.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )

  const deleteTodo = (text) => {
    const newTodos = [...item]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveItem(newTodos)
  }

  const completeTodo = (text) => {
    const newItem = [...item]
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
    {loading && <TodosLoading/>}
    {error && <TodosError/>}
    {(!loading && searchedTodos.length === 1) && <EmptyTodos/>}

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