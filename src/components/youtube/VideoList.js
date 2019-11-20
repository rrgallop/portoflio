import React from 'react';
import VideoItem from './VideoItem'

import { Grid } from '@material-ui/core';

const VideoList = (props) => {
    
    const listOfVideos = props.videos.map((video, id) => <VideoItem onVideoSelect={ props.onVideoSelect }key={id} video={video} />)
    if (listOfVideos.length === 0) return <div></div>
    return (
        <div className="video-list-container">
            <h3>Related videos:</h3><br/>
            {listOfVideos}
        </div>
        )

}

export default VideoList;