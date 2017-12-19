import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searc_bar';
import Videolist from './components/video_lists';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyCWyT0ZfaTV4Ht7SWT6aYV6rvtHdF7CqzI";
import VideoDetail from './components/video_details';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };


    }

    VideoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({videos: videos, selectedVideo: videos[0]});
        });

    }

    render() {
        return (
            <div>
                <SearchBar onChangeSearchTerm={this.VideoSearch.bind(this)}/>
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