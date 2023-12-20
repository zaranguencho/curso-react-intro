import React from 'react';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoContext, TodoProvider} from './components/TodoContext/TodoContext';
import { AppUI } from './AppUI';

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}



export default App;