import { memo } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import cn from 'classnames';
import './../../styles/TodoApp/TodoItem.scss';

const TodoItem = memo(({todo, onRemove, onCheck, style}) => {
    const {id, text, done} = todo;

    return (
        <div className='TodoItem' style={style}>
            <div className={cn('check', {done})} onClick={() => onCheck(id)}>
                {done && <MdDone />}
            </div>
            <div className='text'>
                {text}
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdDelete />
            </div>
        </div>
    );
});

export default TodoItem;