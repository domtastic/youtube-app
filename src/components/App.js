import React, { useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import Header from "./Header";
import useVideos from "../hooks/useVideos";

const App = props => {
    const [selectedVideo, setSelectedVideos] = useState(null);


const [videos, search] = useVideos("climbing");

useEffect(()=>{
    setSelectedVideos(videos[0]);
},[videos]);



   // const  onVideoSelect =  video => {
   //      // console.log("video selected", video);
   //      setSelectedVideos(video)
   //
   //  };
    return (
        <div className="app ui container">
            <Header/>
            <SearchBar onFormSubmitted={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo = {selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos = {videos}
                            onVideoSelect={setSelectedVideos}/>
                    </div>
                </div>

            </div>
        </div>
    );
};





export default App;
