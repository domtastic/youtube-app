import React from 'react';
import VideoCard from "./VideoCard";

const VideoList = ({videos, onVideoSelect}) => {
    //videos = props
    const renderedList = videos.map((video) => {
        return <VideoCard key={video.id.videoId}
                          video={video}
                          onVideoSelect={onVideoSelect}/>;
    });


    return (
        <div className="video-list ui relaxed divided list">
            {renderedList}
        </div>
    );
};



export default VideoList;
