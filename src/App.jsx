import React from 'react';
import { todoList } from './components/TodoList/TodoList';
import { todoCounter } from './components/Todocounter/TodoCounter';
import { todoSearch } from './components/TodoSearch/TodoSearch'
import { todoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { todoError } from './components/TodoError/TodoError';
import { todoLoading } from './components/TodoLoading/TodoLoading';
import { todoEmpty } from './components/EmptyTodo/EmptyTodo';
import { TodoContext, TodoProvider} from './components/TodoContext/TodoContext';

function App() {

  return (
    <>
      <itemCounter/>
      <itemSearch/>
        <TodoContext.Consumer>{({loading, error, searcheditems, completeitem, deleteitem})=> (

      <itemList>
      {loading && <itemLoading/>}
      {error && <itemError/>}
      {(!loading && searcheditems.length === 0) && <itemEmpty/>}
  
          {searcheditems.map(item => (
            <itemItem
              key={item.text}
              text={item.text}
              completed={item.completed}
              onComplete={() => completeitem(item.text)}
              onDelete={() => deleteitem(item.text)}
            />
          ))}
        </itemList>
        )}
    </TodoContext.Consumer>
      <CreateTodoButton />
    </>
  );
}

export default App;