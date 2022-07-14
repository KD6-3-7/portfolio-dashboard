import { useState } from 'react';
import RainSound from './../../sounds/rain.mp3';
import WaveSound from './../../sounds/wave.mp3';
import WhiteNoiseSound from './../../sounds/whiteNoise.mp3';
import { BsFillVolumeMuteFill, BsFillVolumeUpFill, BsCloudFill, BsCloudRainFill, BsJustify, BsWater, BsThreeDots, BsSoundwave } from 'react-icons/bs';
import ReactPlayer from 'react-player';
import './../../styles/PlayerApp/PlayerControls.scss';

const rain = new Audio(RainSound);
const wave = new Audio(WaveSound);
const whiteNoise = new Audio(WhiteNoiseSound);

function PlayerControls({currentLiveStream, liveStreamPlay}) {
    const [volume, setVolume] = useState(0.35);
    const [rainVolume, setRainvolume] = useState(0);
    const [waveVolume, setWavevolume] = useState(0);
    const [whiteNoiseVolume, setWhiteNoisevolume] = useState(0);

    rain.volume = rainVolume;
    wave.volume = waveVolume;
    whiteNoise.volume = whiteNoiseVolume;

    if(rainVolume !== 0) {
        rain.play();
        rain.loop = true;
    } else {
        rain.pause();
    }
    if(waveVolume !== 0) {
        wave.play();
        rain.loop = true;
    } else {
        wave.pause();
    }
    if(whiteNoiseVolume !== 0) {
        whiteNoise.play();
        rain.loop = true;
    } else {
        whiteNoise.pause();
    }

    return (
        <div className='PlayerControls'>
            <div className='flexbox'>
                <div className='volume'>
                    <BsFillVolumeMuteFill className='small-icon' />
                    <input
                        type='range'
                        className='volume-dial'
                        min={0}
                        max={1}
                        value={volume}
                        step={0.01}
                        onChange={e => {
                            setVolume(e.target.valueAsNumber);
                        }}
                    />
                    <BsFillVolumeUpFill className='large-icon' />
                </div>
                <div className='volume'>
                    <BsCloudFill className='small-icon' />
                    <input
                        type='range'
                        className='sound-dial'
                        min={0}
                        max={1}
                        step={0.1}
                        value={rainVolume}
                        onChange={e => {
                            setRainvolume(e.target.valueAsNumber);
                        }}
                    />
                    <BsCloudRainFill className='large-icon' />
                </div>
                <div className='volume'>
                    <BsJustify className='small-icon' />
                    <input
                        type='range'
                        className='sound-dial'
                        min={0}
                        max={1}
                        step={0.1}
                        value={waveVolume}
                        onChange={e => {
                            setWavevolume(e.target.valueAsNumber);
                        }}
                    />
                    <BsWater className='large-icon' />
                </div>
                <div className='volume'>
                    <BsThreeDots className='small-icon' />
                    <input
                        type='range'
                        className='sound-dial'
                        min={0}
                        max={1}
                        step={0.1}
                        value={whiteNoiseVolume}
                        onChange={e => {
                            setWhiteNoisevolume(e.target.valueAsNumber);
                        }}
                    />
                    <BsSoundwave className='large-icon' />
                </div>
            </div>
            <ReactPlayer
                className='liveStreamPlayer'
                width={0}
                height={0}
                playing={liveStreamPlay}
                loop={true}
                volume={volume}
                url={currentLiveStream}
            />
        </div>
    );
}

export default PlayerControls;