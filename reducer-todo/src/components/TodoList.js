import React, {useReducer} from 'react';
import {initialState, reducer} from '../Reducers/index';
import Form from './Form';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        Hey there
        <Form state= {state} dispatch= {dispatch}/>
        </>
    )
}

export default TodoList;