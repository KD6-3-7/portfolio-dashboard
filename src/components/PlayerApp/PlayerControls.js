import { useState } from 'react';
import Rain from './../../sounds/rain.mp3';
import Wave from './../../sounds/wave.mp3';
import WhiteNoise from './../../sounds/whiteNoise.mp3';
import { GiHeavyRain, GiBigWave, GiSoundWaves } from 'react-icons/gi';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import ReactPlayer from 'react-player';
import './../../styles/PlayerApp/PlayerControls.scss';

function PlayerControls({LiveStreamAudio, LiveStreamPlayPause}) {
    let lastPlayedVolume = 0;
    const [unmute, setUnmute] = useState('volumeOn');
    const [volumeIcon, setVolumeIcon] = useState('unmute');
    const [volume, setVolume] = useState(0.35);

    const handleMute = e => {
        let classNameVol = e.target.className;
        if(classNameVol === 'volumnOn' || classNameVol === 'unmute') {
            setUnmute('volumeOff');
            setVolumeIcon('mute');
            lastPlayedVolume = volume;
            setVolume(0);
        } else if (classNameVol === 'volumeOff' || classNameVol === 'mute') {
            setUnmute('volumeOn');
            setVolumeIcon('unmute');
            setVolume(lastPlayedVolume);
        }
    }

    const rain = new Audio(Rain);
    const wave = new Audio(Wave);
    const whiteNoise = new Audio(WhiteNoise);
    const [rainVolume, setRainvolume] = useState(0);
    const [waveVolume, setWavevolume] = useState(0);
    const [whiteNoiseVolume, setWhiteNoisevolume] = useState(0);

    rain.volume = rainVolume;
    wave.volume = waveVolume;
    whiteNoise.volume = whiteNoiseVolume;

    rain.play();
    wave.play();
    whiteNoise.play();

    return (
        <div className='PlayerControls'>
            <div className='volume'>
                <input
                    type='range'
                    className='volume-dial'
                    orient='vertical'
                    min={0}
                    max={1}
                    value={volume}
                    step={0.01}
                    onChange={e => {
                        setVolume(e.target.valueAsNumber);
                    }}
                />
                {volumeIcon === 'unmute' ? <HiVolumeUp className={unmute} onClick={handleMute} /> : <HiVolumeOff className={unmute} onClick={handleMute} />}
            </div>
            <div className='volume'>
                <input
                    type='range'
                    className='sound-dial'
                    orient='vertical'
                    min={0}
                    max={1}
                    step={0.2}
                    value={rainVolume}
                    onChange={e => {
                        setRainvolume(e.target.valueAsNumber);
                    }}
                />
                <GiHeavyRain />
            </div>
            <div className='volume'>
                <input
                    type='range'
                    className='sound-dial'
                    orient='vertical'
                    min={0}
                    max={1}
                    step={0.2}
                    value={waveVolume}
                    onChange={e => {
                        setWavevolume(e.target.valueAsNumber);
                    }}
                />
                <GiBigWave />
            </div>
            <div className='volume'>
                <input
                    type='range'
                    className='sound-dial'
                    orient='vertical'
                    min={0}
                    max={1}
                    step={0.2}
                    value={whiteNoiseVolume}
                    onChange={e => {
                        setWhiteNoisevolume(e.target.valueAsNumber);
                    }}
                />
                <GiSoundWaves />
            </div>
            <ReactPlayer
                className='liveStreamPlayer'
                playing={LiveStreamPlayPause}
                volume={volume}
                url={LiveStreamAudio}
                width={0}
                height={0}
            />
        </div>
    );
}

export default PlayerControls;