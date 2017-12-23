import React from 'react';
import VideoList_item from './video_list_item';

const VideoList = (props) => {
    const videoListItem = props.videos.map((video) => {
        return (
            <VideoList_item key={video.id.videoId} video={video}
                            onVideoSelect={props.onVideoSelect}/>
        )


    });

    return (
        <div>
            <ul className="col-md-4 list-group">
                {videoListItem}
            </ul>
        </div>

    );

};
export default VideoList;
