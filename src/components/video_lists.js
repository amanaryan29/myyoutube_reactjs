import React from 'react';
import ReactDOM from 'react-dom';
import VideoList_item from './videolistItem';
const VideoList=(props)=>{
    const videoListItem=props.videos.map((video)=>{
        return(
            <VideoList_item key={video.id.videoId} video={video}
                            onVideoSelect={props.onVideoSelect}/>
        )


    });

    return (
        <div>
            <ul>
                {videoListItem}
            </ul>
        </div>

    );

}
export default VideoList;