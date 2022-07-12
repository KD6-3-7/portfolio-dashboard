import React from 'react';
import './App.scss';
import cn from 'classnames';
import Header from './components/Header';
import ClockApp from './components/ClockApp';
import PomodoroApp from './components/PomodoroApp';
import TodoApp from './components/TodoApp';
import PlayerApp from './components/PlayerApp';

function App() {
    return (
        <div className='App'>
            <Header />
            <div className={cn('flexbox', 'row')}>
                <div className={cn('flexbox', 'col')}>
                    <div className={cn('flexbox', 'row', 'fix')}>
                        <ClockApp />
                        <PomodoroApp />
                    </div>
                <PlayerApp />
                </div>
            <TodoApp />
            </div>
        </div>
    );
}

export default App;