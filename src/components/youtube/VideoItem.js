import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';


// showing different ways of using props. this is destructuring
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div>
            <div className="yt-thumbs" onClick={ () =>  onVideoSelect(video) }>
                <img alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                <div><b>{video.snippet.title}</b></div>
            </div>
        </div>
    )
}

export default VideoItem;