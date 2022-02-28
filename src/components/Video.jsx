import React from "react";
import Bgvideo from "../assets/video2.mp4";

export default function Video() {
    return(
        <div className="video">
           <div className="video-container">
                <video autoPlay loop muted>
                    <source src={Bgvideo} type="video/mp4" />
                </video>
            <div className="video-overlay">
                <h1 className="big-title">#Tokenadı Verry Soon</h1>
                <p className="video-text">Gelecek token metin text tokenadı metin token slogan!</p>
           </div>
           </div>
        </div>
    );
}