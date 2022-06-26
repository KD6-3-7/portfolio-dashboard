import { useCallback, useState } from 'react';
import './../../styles/TodoApp/TodoCreate.scss';

function TodoCreate({onCreate}) {    
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(e => {
        onCreate(value);
        setValue('');
        e.preventDefault();
    }, [onCreate, value]);

    return (
        <form className='TodoCreate' onSubmit={onSubmit}>
            <input placeholder='할 일을 입력하세요.' value={value} onChange={onChange} />
        </form>
    );
}

export default TodoCreate;