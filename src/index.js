import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searc_bar';
import Videolist from './components/video_lists';
import VideoDetail from './components/video_details';
import API_KEY from "./components/constants";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };


    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({videos: videos, selectedVideo: videos[0]});
        });

    }

    render() {
        return (
            <div>
                <SearchBar onChangeSearchTerm={this.videoSearch.bind(this)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <Videolist videos={this.state.videos}
                           onVideoSelect={(video) => {
                               this.setState({selectedVideo: video})

                           }}/>
            </div>


        );
    }

}

ReactDOM.render(<App/>, document.querySelector('.container'));