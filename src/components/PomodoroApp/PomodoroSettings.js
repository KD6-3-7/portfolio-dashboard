import './../../styles/PomodoroApp/PomodoroSettings.scss';
import PomodoroButton from './PomodoroButton';

function PomodoroSettings({visible, toggleSettingsVisibility, pomoLength, setPomoLength, shortLength, setShortLength, longLength, setLongLength, closeSettings, setSecondsLeft, timerMode}) {
    const applySettings = e => {
        e.preventDefault();

        setPomoLength(e.target.pomodoro.value);
        setShortLength(e.target.shortBreak.value);
        setLongLength(e.target.longBreak.value);
        closeSettings();

        switch(timerMode) {
            case 'short':
                setSecondsLeft(e.target.shortBreak.value * 60);
                break;
            case 'long':
                setSecondsLeft(e.target.longBreak.value * 60);
                break;
            default:
                setSecondsLeft(e.target.pomodoro.value * 60);
        }
    }

    if(visible) {
        return (
            <div className='PomodoroSettings'>
                <div className='preferences'>
                    <PomodoroButton type='close' buttonText='×' toggleVisibility={toggleSettingsVisibility} />
                    <h3>Settings</h3>
                    <form onSubmit={applySettings}>
                        <div className='time-setting'>
                            <h4>Time (Minutes)</h4>
                            <div className='time-setting-form'>
                                <label htmlFor='pomodoro'>pomodoro</label>
                                <input type='number' name='pomodoro' id='pomodoro' min='5' max='90' defaultValue={pomoLength} />

                                <label htmlFor='short-break'>short break</label>
                                <input type='number' name='shortBreak' id='short-break' min='1' max='14' defaultValue={shortLength} />

                                <label htmlFor='long-break'>long break</label>
                                <input type='number' name='longBreak' id='long-break' min='15' max='30' defaultValue={longLength} />
                            </div>
                        </div>
                        <PomodoroButton type='apply' buttonText='Apply' />
                    </form>
                </div>
            </div>
        );
    }

    return(null);
}

export default PomodoroSettings;