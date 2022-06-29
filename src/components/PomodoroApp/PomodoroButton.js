import { BsGearFill } from 'react-icons/bs';
import './../../styles/PomodoroApp/PomodoroButton.scss';

function PomodoroButton({type, buttonText = '', toggleVisibility}) {
    if(type === 'settings') {
        return (
            <button className='PomodoroButton' name='settings' onClick={toggleVisibility}><BsGearFill /></button>
        );
    }

    if(type === 'close') {
        return (
            <button className='closeButton' onClick={toggleVisibility}>{buttonText}</button>
        );
    }

    if(type === 'apply') {
        return (
            <div className='apply'>
                <input type='submit' value={buttonText} className="applyButton" />
            </div>
        )
    }

    else {
        return (null);
    }
}

export default PomodoroButton;