// add a reducer file and build out a reducer with a default return. Build your initial State object and export both the initial State and reducer.

export const initialState = {
    listItem: '',
    todoList: [],
    completed: false,
    id: Date.now()
}

export const reducer = ( state, action ) => {
    switch (action.type) {
        case 'INPUT':
            return {
                ...state,
                listItem: action.value
            }
        case 'ADD_ITEM':
            const newID = new Date.now()
            const newItem = {
                item: action.item,
                completed: false,
                id: newID
            }
            const newList = [...state.todoList, newItem]
                return {
                    ...state,
                    todoList: newList
                }
        case 'REMOVE_ITEM':
            const newStateRemove = state.todoList.filter( item =>
                item.id !== action.id)
                return {
                    ...state,
                    todoList: newStateRemove
                }
        case 'COMPLETE_ITEM':
            const newStateCompleted = state.todoList.map(
                item => `${item.id}` === `${action.id}` ? {...item, completed: !item.completed} : item
            )
            return {
                ...state,
                todoList: newStateCompleted
            }
        case 'CLEAR_COMPLETED':
            const newStateClear = state.todoList.filter( item => !item.completed)
            return {
                ...state, todoList: newStateClear
            }
        default:
            return state
    }
}