import React from 'react';
import { TodoCounter } from './components/Todocounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoLoading } from './components/TodoLoading/TodoLoading';
import { TodoError } from './components/TodoError/TodoError';
import { TodoEmpty } from './components/EmptyTodo/EmptyTodo';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoContext } from './components/TodoContext/TodoContext';
import { Modal } from './components/Modal/Modal';
import { TodoForm } from './components/TodoForm/TodoForm';

function AppUI() {
    const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodoLoading />}
                {error && <TodoError />}
                {!loading && searchedTodos.length === 0 && <TodoEmpty />}
                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export { AppUI };
