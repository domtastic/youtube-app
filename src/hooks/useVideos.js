import {useEffect, useState} from 'react';
import youtube from "../api/youtube";
const KEY = "AIzaSyBMlHejhW2GCT2j5JZ85ZE30uHlmcLm2l8";


const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    useEffect(()=> {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        const response = await youtube.get("/search", {
            params: {
                q : term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });
        // console.log(response);
        console.log(response.data.items);

        setVideos(response.data.items);
    };
    return [videos, search];
};

export default useVideos;
