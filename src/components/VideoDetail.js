import React from 'react';

const VideoDetail = ({selectedVideo}) => {

    if (!selectedVideo) {
        return (
            <div>"Loading..."</div>
        )
    }
const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    return (
        <div className="video-detail">
            <div className="ui embed">
                {/*<iframe src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} frameborder="0"></iframe>*/}
                <iframe src={videoSrc} title="video player" frameborder="0"></iframe>
             </div>
            <div className="ui segment">
                        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
                        <p className="description">{selectedVideo.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
