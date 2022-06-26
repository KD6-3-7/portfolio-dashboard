import React from 'react';
import './App.scss';
import Header from './components/Header';
import ClockApp from './components/ClockApp';
import PomodoroApp from './components/PomodoroApp';
import TodoApp from './components/TodoApp';

function App() {
    return (
        <div className='App'>
            <Header />
            <div className='flexbox'>
                <ClockApp />
                <PomodoroApp />
                <TodoApp />
            </div>
        </div>
    );
}

export default App;