import { useState } from 'react';
import ReactPlayer from 'react-player';
import PlayerChannels from './PlayerApp/PlayerChannels';
import PlayerControls from './PlayerApp/PlayerControls';
import PlayerHead from './PlayerApp/PlayerHead';
import PlayerTemplate from './PlayerApp/PlayerTemplate';

function PlayerApp() {
    const [liveStream, setLiveStream] = useState(false);
    const [currentLiveStream, setCurrentLiveStream] = useState('');
    const [video, setVideo] = useState('');

    const handlePausePlaySwitch = e => {
        let className = e.target.className;
        if(className === 'playPause' || className === 'playBtn') {
            start();
        } else if (className === 'playPause2' || className === 'playBtn2') {
            pause();
        }
    }

    const start = () => {
        setLiveStream(false);
        setLiveStream(true);
    }

    const pause = () => {
        setLiveStream(false);
    }

    // Ambient, Nz, Chillhop, Lofi, Memoir, Jazz
    const AmbientRenders = () => {
        setVideo('//www.youtube.com/embed/hBGbt2CRDpA?autoplay=1&mute=1&start=1');
        setCurrentLiveStream('https://www.youtube.com/watch?v=GlEps1Ra06U&ab_channel=RelaxingAmbienceASMR');
        setLiveStream(true);
    }

    const NzAmbience = () => {
        setVideo('//www.youtube.com/embed/saJ-BSbK3sQ?autoplay=1&mute=1&start=1');
        setCurrentLiveStream('https://www.youtube.com/watch?v=saJ-BSbK3sQ');
        setLiveStream(true);
    }

    const ChillhopMusic = () => {
        setVideo('//www.youtube.com/embed/iEGFFyv0MH4?autoplay=1&mute=1&start=1');
        setCurrentLiveStream('https://www.youtube.com/watch?v=7NOSDKb0HlU&ab_channel=ChillhopMusic');
        setLiveStream(true);
    }

    const LofiGirl = () => {
        setVideo('//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1');
        setCurrentLiveStream('https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl');
        setLiveStream(true);
    }

    const MemoirMusic = () => {
        setVideo('//www.youtube.com/embed/9qP3Y_QYizw?autoplay=1&mute=1&start=1');
        setCurrentLiveStream('https://www.youtube.com/watch?v=bCw8NbNrMAk&ab_channel=MemoirMusic');
        setLiveStream(true);
    }

    const JazzHopCafe = () => {
        setVideo('//www.youtube.com/embed/U8HBZOTZrf0?autoplay=1&mute=1&start=1');
        setCurrentLiveStream('https://www.youtube.com/watch?v=2HQag9B4nN0&ab_channel=UCJhjE7wbdYAae1G25m0tHAA');
        setLiveStream(true);
    }

    return (
        <PlayerTemplate>
            <PlayerHead />
            <PlayerChannels
                Ambient={AmbientRenders}
                Nz={NzAmbience}
                Chillhop={ChillhopMusic}
                Lofi={LofiGirl}
                Memoir={MemoirMusic}
                Jazz={JazzHopCafe}
            />
            <PlayerControls 
                playPause={handlePausePlaySwitch}
                LiveStreamAudio={currentLiveStream}
                LiveStreamPlayPause={liveStream}
            />
            <ReactPlayer
                className='vid'
                width='100%'
                height='100%'
                loop={true}
                playing={liveStream}
                volume={null}
                muted={true}
                url={video}
            />
        </PlayerTemplate>
    );
}

export default PlayerApp;