import React, { useCallback, useReducer, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

function DailyTodos() {
	const array = [];
	array.push(
		{
			id: 1,
			text: '🔁 React 공부',
			done: false
		},
		{
			id: 2,
			text: '🔁 Javascript 공부',
			done: false
		},
		{
			id: 3,
			text: '🔁 1일 1 Commit',
			done: false
		}
	);
	return array;
}

function TodoReducer(todos, action) {
    switch(action.type) {
        case 'CREATE':
            return todos.concat(action.todo);
        case 'CHECK':
            return todos.map(todo =>
				todo.id === action.id ? {...todo, done: !todo.done} : todo
			);
        case 'REMOVE':
            return todos.filter(todo => todo.id !== action.id);
        default:
            return todos;
    }
}

function App() {
	const [todos, dispatch] = useReducer(TodoReducer, undefined, DailyTodos);
	
	const nextId = useRef(4);

	const onCreate = useCallback(text => {
		const todo = {
			id: nextId.current,
			text,
			done: false
		};
		dispatch({
			type: 'CREATE',
			todo
		});
		nextId.current += 1;
	}, []);

	const onCheck = useCallback(id => {
		dispatch({
			type: 'CHECK',
			id
		});
	}, []);

	const onRemove = useCallback(id => {
		dispatch({
			type: 'REMOVE',
			id
		});
	}, []);

	return (
		<TodoTemplate>
			<TodoHead todos={todos} />
			<TodoList todos={todos} onRemove={onRemove} onCheck={onCheck}/>
			<TodoCreate onCreate={onCreate} />
		</TodoTemplate>
	);
}

export default App;