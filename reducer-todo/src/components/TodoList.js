import React, {useReducer} from 'react';
import {initialState, reducer} from '../Reducers/index';
import Form from './Form';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        Hey there
        <Form state= {state} dispatch= {dispatch}/>
        {state.todoList.map(listItem => {
            return (
                <div key = {listItem.id}>
                    <div>
                        <span>
                            {listItem.completed ? '✔': null}
                        </span>
                        <span key={listItem.id}>
                            {listItem.item}
                        </span>
                        <button onClick={() => dispatch({
                            id: listItem.id,
                            type: 'COMPLETED_ITEM'
                        })}>
                            Complete
                        </button>
                        <button onClick={() => dispatch({
                            id: listItem.id,
                            type: 'REMOVE_ITEM'
                        })}>
                            Remove
                        </button>
                    </div>
                </div>
            )
        })}
        
        <button onClick= {() => dispatch({
            type: 'CLEAR_COMPLETED'
        })}>
            Clear all Completed 
        </button>
        </>
    )
}

export default TodoList;