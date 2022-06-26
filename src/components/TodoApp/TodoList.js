import { memo, useCallback } from 'react';
import { List } from 'react-virtualized';
import './../../styles/TodoApp/TodoList.scss';
import TodoItem from './TodoItem';

const TodoList = memo(({todos, onRemove, onCheck}) => {
    const rowRenderer = useCallback(({index, key, style}) => {
        const todo = todos[index];

        return (
            <TodoItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onCheck={onCheck}
                style={style}
            />
        );
    }, [todos, onRemove, onCheck]);

    return (
        <List
            className='TodoList'
            width={512}
            height={450}
            rowCount={todos.length}
            rowHeight={56}
            rowRenderer={rowRenderer}
            list={todos}
            style={{outline: 'none'}}
        />
    );
});

export default TodoList;