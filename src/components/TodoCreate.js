import { useCallback, useState } from 'react';
import cn from 'classnames';
import { MdAdd } from 'react-icons/md';
import './../scss/TodoCreate.scss';

function TodoCreate({onCreate}) {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);
    
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(e => {
        onCreate(value);
        setValue('');
        setOpen(false);
        e.preventDefault();
    }, [onCreate, value]);

    return (
        <div>
            {open && <div className='box'>
                <form className='insert-form' onSubmit={onSubmit}>
                    <input autoFocus placeholder='할 일을 입력하세요.' value={value} onChange={onChange} />
                </form>
            </div>}
            <div className={cn('circle-btn',{open})} onClick={onToggle} open={open}>
                <MdAdd />
            </div>
        </div>
    );
}

export default TodoCreate;