import { useState } from 'react';
import PlayerChannels from './PlayerApp/PlayerChannels';
import PlayerControls from './PlayerApp/PlayerControls';
import PlayerHead from './PlayerApp/PlayerHead';
import PlayerTemplate from './PlayerApp/PlayerTemplate';

function PlayerApp() {
    const [liveStreamPlay, setliveStreamPlay] = useState(false);
    const [currentLiveStream, setCurrentLiveStream] = useState('');
    let [toggle, setToggle] = useState(false);

    const playPause = e => {
        toggle = e.target.checked;
        if(toggle) {
            start();
        } else {
            pause();
        }
        setToggle(toggle);
    }

    const start = () => {
        setliveStreamPlay(false);
        setliveStreamPlay(true);
    }

    const pause = () => {
        setliveStreamPlay(false);
    }

    // Ambient, Nz, Chillhop, Lofi, Memoir, Jazz
    const AmbientRenders = () => {
        setCurrentLiveStream('https://www.youtube.com/watch?v=GlEps1Ra06U&ab_channel=RelaxingAmbienceASMR');
        if (toggle) {
            setliveStreamPlay(true);
        } else {
            setliveStreamPlay(false);
        }
    }

    const NzAmbience = () => {
        setCurrentLiveStream('https://www.youtube.com/watch?v=saJ-BSbK3sQ');
        if (toggle) {
            setliveStreamPlay(true);
        } else {
            setliveStreamPlay(false);
        }
    }

    const ChillhopMusic = () => {
        setCurrentLiveStream('https://www.youtube.com/watch?v=7NOSDKb0HlU&ab_channel=ChillhopMusic');
        if (toggle) {
            setliveStreamPlay(true);
        } else {
            setliveStreamPlay(false);
        }
    }

    const LofiGirl = () => {
        setCurrentLiveStream('https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl');
        if (toggle) {
            setliveStreamPlay(true);
        } else {
            setliveStreamPlay(false);
        }
    }

    const MemoirMusic = () => {
        setCurrentLiveStream('https://www.youtube.com/watch?v=bCw8NbNrMAk&ab_channel=MemoirMusic');
        if (toggle) {
            setliveStreamPlay(true);
        } else {
            setliveStreamPlay(false);
        }
    }

    const JazzHopCafe = () => {
        setCurrentLiveStream('https://www.youtube.com/watch?v=U8HBZOTZrf0');
        if (toggle) {
            setliveStreamPlay(true);
        } else {
            setliveStreamPlay(false);
        }
    }

    return (
        <PlayerTemplate>
            <PlayerHead playPause={playPause} />
            <PlayerControls
                currentLiveStream={currentLiveStream}
                liveStreamPlay={liveStreamPlay}
            />
            <PlayerChannels
                Ambient={AmbientRenders}
                Nz={NzAmbience}
                Chillhop={ChillhopMusic}
                Lofi={LofiGirl}
                Memoir={MemoirMusic}
                Jazz={JazzHopCafe}
            />
        </PlayerTemplate>
    );
}

export default PlayerApp;