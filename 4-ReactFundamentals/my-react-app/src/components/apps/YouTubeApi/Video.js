import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search-bar';
import VideoDetail from './video-detail'

const API_KEY = 'AIzaSyBLsoLFsNiI9YJRpiQ7cIgxfh8apKxfFow';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('React Tutorials');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); 
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1800);
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1 className="section-title">React Video Search </h1>
                    <h3>Based on Stephen Grider's work on Udemy</h3>

                    <SearchBar onSearchTermChange={videoSearch} />
                    <VideoDetail video={this.state.selectedVideo} />

                </div>
            </div>
        );
    }
}

export default Video;