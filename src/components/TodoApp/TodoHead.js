import './../../styles/TodoApp/TodoHead.scss';

function TodoHead({todos}) {
    const undoneTasks = todos.filter(todo => !todo.done);

    return (
        <div className='TodoHead'>
            <h2>To-do List</h2>
            <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
        </div>
    );
}

export default TodoHead;