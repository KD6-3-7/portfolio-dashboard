import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import './../../styles/PomodoroApp/PomodoroMute.scss';

function PomodoroMute({volume, setVolume}) {
    const handleClick = () => {
        if(volume === 0) {
            setVolume(1);
        } else {
            setVolume(0);
        }
    }

    if(volume === 0) {
        return (
            <button className='PomodoroMute' id='mute-btn' onClick={handleClick}><HiVolumeOff /></button>
        );
    } else {
        return (
            <button className='PomodoroMute' id='mute-btn' onClick={handleClick}><HiVolumeUp /></button>
        );
    }
}

export default PomodoroMute;