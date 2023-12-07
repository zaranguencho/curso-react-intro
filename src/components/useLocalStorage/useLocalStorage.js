import React from "react"

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

export { useLocalStorage }
