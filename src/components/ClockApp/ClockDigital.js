import { useState } from 'react';
import './../../styles/ClockApp/ClockDigital.scss';

function ClockDigital() {
    const [hoursDigital, setHoursDigital] = useState('');
    const [minutesDigital, setMinutesDigital] = useState('');
    const [amPm, setAmPm] = useState('');

    function clock() {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ampm;

        if(hh >= 12) {
            hh = hh - 12;
            ampm = "PM";
        } else {
            ampm = "AM";
        }

        if(hh === 0)
            hh = 12;
        if(hh < 10)
            hh = `0${hh}`;
        if(mm < 10)
            mm = `0${mm}`;

        setHoursDigital(hh);
        setMinutesDigital(mm);
        setAmPm(ampm);
    }
    setInterval(clock, 1000);

    return (
        <div className='ClockDigital'>
            <div className='clock-hours'>
                {`${hoursDigital}:`}
            </div>
            <div className='clock-minutes'>
                {minutesDigital}
            </div>
            <div className='clock-ampm'>
                {amPm}
            </div>
        </div>
    );
}

export default ClockDigital;