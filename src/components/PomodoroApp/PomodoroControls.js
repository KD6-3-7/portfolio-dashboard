import useSound from 'use-sound';
import './../../styles/PomodoroApp/PomodoroControls.scss';
import clickSfx from './../../sounds/slide.mp3';

function PomodoroControls({timerMode, setTimerMode, setSecondsLeft, pomoLength, shortLength, longLength, setIsActive, setButtonText, volume}) {
    const [playSfx] = useSound(clickSfx, {volume: volume});
    const handleModeChange = e => {
        setTimerMode(e.target.id);
        setIsActive(false);
        setButtonText('START');
        switch(e.target.id) {
            case 'short':
                setSecondsLeft(shortLength * 60);
                break;
            case 'long':
                setSecondsLeft(longLength * 60);
                break;
            default:
                setSecondsLeft(pomoLength * 60);
        }
    }

    return (
        <form className='PomodoroControls'>
            <input type='radio' id='pomo' name='mode' checked={timerMode === 'pomo'} onClick={playSfx} onChange={handleModeChange} />
            <label htmlFor='pomo' className='control-btn'>pomodoro</label>

            <input type='radio' id='short' name='mode' checked={timerMode === 'short'} onClick={playSfx} onChange={handleModeChange} />
            <label htmlFor='short' className='control-btn'>short break</label>

            <input type='radio' id='long' name='mode' checked={timerMode === 'long'} onClick={playSfx} onChange={handleModeChange} />
            <label htmlFor='long' className='control-btn'>long break</label>
        </form>
    );
}

export default PomodoroControls;