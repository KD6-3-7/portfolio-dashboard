import './../../styles/PlayerApp/PlayerHead.scss';

function PlayerHead({playPause}) {
    return (
        <div className='PlayerHead'>
            <h2>Now Playing...</h2>
            <div className='play'>
                <input type='checkbox' id='play' onClick={playPause} hidden />
                <label htmlFor='play' className='play-bg'>
                    <span className='play-btn'>on</span>
                </label>
            </div>
        </div>
    )
}

export default PlayerHead;