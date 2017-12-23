import React, {Component} from 'react';

const VideoList_item = (props) => {
    const video = props.video;
    let style1 = {
        color: "Black",
        fontSize: "15px",
        fontFamily: "Verdana"
    };
    let mar = {
        marginTop: "20px",
        marginBottom: "20px"
    };
    let mar1 = {
        marginTop: "5px",
        marginBottom: "5px"
    };
    let bor = {
        border: "0px"
    };
    return (

        <li style={style1} onClick={() => {
            props.onVideoSelect(video)
        }} className="list-group-item card text-white bg-transparent mb-3" style={bor}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object details" src={video.snippet.thumbnails.default.url}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};
export default VideoList_item;