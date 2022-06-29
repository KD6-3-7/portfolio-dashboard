import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import useSound from 'use-sound';
import './../../styles/PomodoroApp/PomodoroTimer.scss';
import PomodoroMute from './PomodoroMute';
import startSfx from './../../sounds/startTimer.mp3';
import pauseSfx from './../../sounds/pauseTimer.mp3';

function PomodoroTimers({timerMode, percentage, timeLeft, isActive, setIsActive, buttonText, setButtonText, volume, setVolume}) {
    const [play] = useSound(startSfx, {
        interrupt: true,
        volume: volume
    });
    const [pause] = useSound(pauseSfx, {
        interrupt: true,
        volume: volume
    });
    const handleClick = e => {
        if(e.target.id === 'muteButton') {
            return null;
        }

        if(timeLeft === '0:00') {
            return null;
        }

        if(isActive) {
            pause();
        }

        else {
            play();
        }

        setIsActive(!isActive);
        setButtonText(buttonText === 'START' || buttonText === 'RESUME' ? 'PAUSE' : 'RESUME');
    }

    let timesUpMsg = timerMode === 'pomo' ? 'time for a break' : 'back to work!';
    let timeText = timeLeft === '0:00' ? timesUpMsg : timeLeft;
    let textSize = timeLeft === '0:00' ? '10px' : '20px';

    return (
        <div className='PomodoroTimer' onClick={handleClick}>
            <div className='timer'>
                <CircularProgressbarWithChildren value={percentage} text={timeText} strokeWidth={4} styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: '#f86565',
                    textColor: '#343a40',
                    textSize: textSize,
                    trailColor: 'none'
                })}>
                    <PomodoroMute volume={volume} setVolume={setVolume} />
                    <button className='start-pause-btn' onClick={handleClick}>{buttonText}</button>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
}

export default PomodoroTimers;