import React from 'react';

import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {
    if(!video) return <div></div>
    // backticks = template literals
    // {} dynamic data
    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <React.Fragment>
        
        <h1>Result</h1><br/><br/>
            <div className="videoframe">
                <iframe className="responsive-iframe" frameBorder="5"title="VideoPlayer" src={videoSrc}/>  
            </div>
            <div>
                <Typography variant="h5">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="body2">{video.snippet.description}</Typography>
            </div>
            
        </React.Fragment>
    )
}

export default VideoDetail;