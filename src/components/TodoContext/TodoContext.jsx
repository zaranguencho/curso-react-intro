import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const { item, saveItem, loading, error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = item.filter(item => !!item.completed).length;
    const totalTodos = item.length;

    const searchedTodos = item.filter((item) => {
        return item.text.toLowerCase().includes(searchValue.toLowerCase());
    });

    const deleteTodo = (text) => {
        const newItem = [...item];
        const itemIndex = newItem.findIndex((item) => item.text === text);
        newItem.splice(itemIndex, 1);
        saveItem(newItem);
    };

    const completeTodo = (text) => {
        const newItem = [...item];
        const itemIndex = newItem.findIndex((item) => item.text === text);
        newItem[itemIndex].completed = true;
        saveItem(newItem);
    };

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
