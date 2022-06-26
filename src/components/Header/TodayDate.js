import './../../styles/Header/TodayDate.scss';

function TodayDate() {
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {
        weekday: 'long'
    });
    
    return (
        <div className='TodayDate'>
            <h1>{dateString}</h1>
            <div className='day'>{dayName}</div>
        </div>
    );
}

export default TodayDate;