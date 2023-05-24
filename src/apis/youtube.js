import axios from "axios";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params:{
        key: "AIzaSyC-LlKywuML0bPfQMjJcurIX03dACjI2SQ",
        maxResults:20
    }
});