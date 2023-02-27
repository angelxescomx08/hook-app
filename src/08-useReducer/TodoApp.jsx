import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const initialSate = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialSate, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos || []))
    }, [todos])

    const handleTodo = (todo) => {
        const action = {
            type: '[TODO] add TODO',
            payload: todo
        }

        dispatch(action)
    }

    const handleDeleteTodo = id => {
        dispatch({
            type: '[TODO] remove TODO',
            payload: id
        })
    }

    const handleToggleTodo = id => {
        dispatch({
            type: '[TODO] toggle TODO',
            payload: id
        })
    }

    return (
        <>
            <h1>TodoApp: (10), <small>Pendientes: (2)</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />

                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleTodo} />

                </div>
            </div>

        </>
    )
}
