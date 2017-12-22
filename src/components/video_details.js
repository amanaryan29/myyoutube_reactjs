import React from 'react';
const VideoDetail=(props)=>{
    if(!props.video){
        return(
            <div>loading....</div>
        );
    }
    const url=`https://www.youtube.com/embed/`+props.video.id.videoId
    console.log("props"+props);
    var Style2={
        color:"White",
        fontSize:"40px",
        fontFamily:"Verdana"
    };
    var mar={
      marginTop:"10px",
      marginBottom:"20px"
    };
    var bor={
        border:"0px"
    };
    return(
        <div  style={mar} className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe allowFullScreen="allowFullScreen" className="embed-responsive-item" src={url}/>
            </div>
            <div  style={mar} className="details" style={bor}>
                <div >
                    <h1 style={Style2} className="Jumbotron">{props.video.snippet.title}</h1>
                </div>
                {/*<div>{props.video.snippet.description}</div>*/}
            </div>
        </div>
    );
}
export  default VideoDetail;