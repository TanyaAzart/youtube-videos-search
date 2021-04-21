import axios from 'axios';

const KEY = 'AIzaSyA-8sFRLlVzyOQlwI8k5Ex4z7HD44NG35o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    
    params: {
        part: 'snippet',
        type: "video",
        maxResults: 5,
        key: KEY
    }

}) ;