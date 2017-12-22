import React,{Component} from 'react';

const VideoList_item=(props)=>{
    const video=props.video;
    var Style={
        color:"Black",
        fontSize:"15px",
        fontFamily:"Verdana"
    };
    var mar={
        marginTop:"20px",
        marginBottom:"20px"
    };
    var mar1={
        marginTop:"5px",
        marginBottom:"5px"
    };
    var bor={
        border:"0px"
    };
    return (

        <li style={Style} onClick={()=>{props.onVideoSelect(video)}}  className="list-group-item card text-white bg-transparent mb-3" style={bor}>
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

}
export default VideoList_item;