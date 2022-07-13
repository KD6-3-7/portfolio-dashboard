import './../../styles/PlayerApp/PlayerChannels.scss';

function PlayerChannels({Ambient, Nz, Chillhop, Lofi, Memoir, Jazz}) {
    return (
        <div className='PlayerChannels'>
            <div className='options'>
                <input type='radio' id='ambient' name='channel' onClick={Ambient} />
                <label htmlFor='ambient' className='select-btn'>Ambient Renders</label>
            </div>

            <div className='options'>
                <input type='radio' id='nz' name='channel' onClick={Nz} />
                <label htmlFor='nz' className='select-btn'>NZ Ambience</label>
            </div>

            <div className='options'>
                <input type='radio' id='chillhop' name='channel' onClick={Chillhop} />
                <label htmlFor='chillhop' className='select-btn'>Chillhop Music</label>
            </div>

            <div className='options'>
                <input type='radio' id='lofi' name='channel' onClick={Lofi} />
                <label htmlFor='lofi' className='select-btn'>Lofi Girl</label>
            </div>

            <div className='options'>
                <input type='radio' id='memoir' name='channel' onClick={Memoir} />
                <label htmlFor='memoir' className='select-btn'>Memoir Music</label>
            </div>

            <div className='options'>
                <input type='radio' id='jazz' name='channel' onClick={Jazz} />
                <label htmlFor='jazz' className='select-btn'>The Jazz Hop Cafe</label>
            </div>
        </div>
    );
}

export default PlayerChannels;