import React, { useRef, useState } from 'react'
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

const videoSrc = 'https://v16m.tiktokcdn.com/4266557899d7494ee1dd8831e771ada9/5f3521a7/video/tos/useast2a/tos-useast2a-ve-0068/248ac582bd1b43e7892886623c788d67/?a=1233&br=2884&bt=1442&cr=0&cs=0&dr=0&ds=3&er=&l=2020081111190301018907422549020FDF&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzZqbmRrM2VzcjMzZTczM0ApNzQ5Nmc2OmQ6NzQ8aDY6ZmdhMl9rai9zZWFfLS0zMTZzczA0L14wNS9hLzViYi42YDQ6Yw%3D%3D&vl=&vr='

const Video = () => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video ref={videoRef} onClick={onVideoPress} className="video__player" src={videoSrc}>

            </video>
            <VideoFooter />
            <VideoSideBar />
        </div>
    )
}
export default Video;
