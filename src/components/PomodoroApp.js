import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import PomodoroTemplate from './PomodoroApp/PomodoroTemplate';
import PomodoroButton from './PomodoroApp/PomodoroButton';
import PomodoroControls from './PomodoroApp/PomodoroControls';
import PomodoroTimers from './PomodoroApp/PomodoroTimer';
import PomodoroSettings from './PomodoroApp/PomodoroSettings';
import timesUpSfx from './../sounds/timesUp.mp3';

function PomodoroApp() {
    const [settingsVisible, setSettingsVisible] = useState(false);
    const [timerMode, setTimerMode] = useState('pomo');
    const [pomoLength, setPomoLength] = useState(25);
    const [shortLength, setShortLength] = useState(3);
    const [longLength, setLongLength] = useState(15);
    const [secondsLeft, setSecondsLeft] = useState(pomoLength * 60);
    const [isActive, setIsActive] = useState(false);
    const [buttonText, setButtonText] = useState('START');
    const [volume, setVolume] = useState(1);
    const [timesUp] = useSound(timesUpSfx, {
        volume: volume
    });
    
    useEffect(() => {
        if(isActive) {
            const interval = setInterval(() => {
                setSecondsLeft(secondsLeft => secondsLeft - 1);
            }, 1000);

            if(secondsLeft === 0) {
                clearInterval(interval);
                setIsActive(false);
                setButtonText('');
                timesUp();
            }

            return() => clearInterval(interval);
        }
    }, [isActive, secondsLeft, timesUp]);

    const toggleSettingsVisibility = e => {
        setSettingsVisible(!settingsVisible);
    }

    const formatTimeLeft = seconds => {
        return(`${Math.floor(seconds / 60)}:${(seconds % 60 > 9) ? seconds % 60 : '0' + seconds % 60}`);
    }

    const calcPercentage = () => {
        if(timerMode === 'pomo') {
            return((secondsLeft / (pomoLength * 60)) * 100);
        }
        if(timerMode === 'short') {
            return((secondsLeft / (shortLength * 60)) * 100);
        }
        if(timerMode === 'long') {
            return((secondsLeft / (longLength * 60)) * 100);
        }
    }

    return (
        <PomodoroTemplate>
            <h2>Pomodoro Timer</h2>
            <PomodoroButton type='settings' toggleVisibility={toggleSettingsVisibility} />
            <PomodoroControls
                timerMode={timerMode}
                setTimerMode={setTimerMode}
                setSecondsLeft={setSecondsLeft}
                pomoLength={pomoLength}
                shortLength={shortLength}
                longLength={longLength}
                setIsActive={setIsActive}
                buttonText={buttonText}
                setButtonText={setButtonText}
                volume={volume}
            />
            <PomodoroTimers
                timerMode={timerMode}
                percentage={calcPercentage()}
                timeLeft={formatTimeLeft(secondsLeft)}
                isActive={isActive}
                setIsActive={setIsActive}
                buttonText={buttonText}
                setButtonText={setButtonText}
                volume={volume}
                setVolume={setVolume}
            />
            
            <PomodoroSettings
                visible={settingsVisible}
                toggleSettingsVisibility={toggleSettingsVisibility}
                pomoLength={pomoLength}
                setPomoLength={setPomoLength}
                shortLength={shortLength}
                setShortLength={setShortLength}
                longLength={longLength}
                setLongLength={setLongLength}
                closeSettings={toggleSettingsVisibility}
                setSecondsLeft={setSecondsLeft}
                timerMode={timerMode}
            />
        </PomodoroTemplate>
    );
}

export default PomodoroApp;