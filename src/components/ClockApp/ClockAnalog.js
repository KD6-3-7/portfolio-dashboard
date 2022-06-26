import { useState } from 'react';
import './../../styles/ClockApp/ClockAnalog.scss';

function ClockAnalog() {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    function clock() {
        let date = new Date();
        let hh = date.getHours() * 30;
        let mm = date.getMinutes() * 6;
        let ss = date.getSeconds() * 6;

        setHours(`rotateZ(${hh + mm / 12}deg)`);
        setMinutes(`rotateZ(${mm}deg)`);
        setSeconds(`rotateZ(${ss}deg)`);
    }
    setInterval(clock, 1000);

    return (
        <div className='ClockAnalog'>
            <span className='clock-twelve'></span>
            <span className='clock-three'></span>
            <span className='clock-six'></span>
            <span className='clock-nine'></span>

            <div className='clock-center'></div>
            <div className='clockHand-hours' style={{transform: hours}}></div>
            <div className='clockHand-minutes' style={{transform: minutes}}></div>
            <div className='clockHand-seconds' style={{transform: seconds}}></div>
        </div>
    );
}

export default ClockAnalog;