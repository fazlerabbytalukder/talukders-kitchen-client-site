import React, { useState } from 'react';
import './IntroVideo.css';
import introVideo from '../../video/intro video.mp4';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const IntroVideo = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = React.useRef();

    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)
        if (playVideo) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    }
    return (
        <div className='app-video'>
            <video
                src={introVideo}
                ref={vidRef}
                type="video/mp4"
                loop
                controls={false}
                muted
            ></video>
            <div className='app-video-overlay flex-center'>
                <div onClick={handleVideo} className='app-video-overlay-circle flex-center'>
                    {playVideo
                        ? <BsPauseFill color='#fff' fontSize={30} />
                        : <BsFillPlayFill color='#fff' fontSize={30} />}
                </div>
            </div>
        </div>
    );
};

export default IntroVideo;