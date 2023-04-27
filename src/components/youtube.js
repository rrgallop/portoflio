import React from 'react';
import '../style.css';
import YoutubeApi from '../api/youtubeapi.js'
// import { SearchBar, VideoDetail, VideoList } from './youtube/';
import SearchBar from './youtube/SearchBar.js'
import VideoDetail from './youtube/VideoDetail.js'
import VideoList from './youtube/VideoList.js'
import VideoItem from './youtube/VideoItem.js'

class YouTube extends React.Component {


    state = {
        videos: [],
        selectedVideo: null

    }

    openVideo = (video) => {
        this.setState ({ selectedVideo: video });
    }

    doSubmit = async (searchTerm) => {

        /* 'search' is added to the base URL defined in api/youtube.js
           q indicates a query */
        const response = await YoutubeApi.get('search', {
            params: {
                part: 'snippet',
                maxResult: 5,
                key: 'AIzaSyBIYd_ZCOmL_CU6gIT1q9Xtbu9_BU9WZFA',
                q: searchTerm
            }
        });

        // response.data.items holds the items returned by the API
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    render (){
        const { selectedVideo, videos } = this.state;
        return(
            <div>
                <section className="body-section-1">
                    <section className="tagline">
                        <h2>YouTube Player</h2>
                    </section>
                    <section className="infoblurb">
                        <h3>Search and watch YouTube videos directly from my homepage. 
                        Interacts with the YouTube API. Now, you never have to leave!
                        </h3>
                    </section>
                </section>
                <section className="body-section-2">
                    <div className="youtube-player">
                        <div>
                            <div>
                                <div className="searchbar">
                                    <SearchBar onFormSubmit={this.doSubmit} />
                                </div>
                                <div className="videoport">
                                    <VideoDetail video={selectedVideo} />
                                </div>
                                <div className="videolist">
                                    <VideoList videos={videos} onVideoSelect={this.openVideo} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
                
            
        )
    }
}


export default YouTube;