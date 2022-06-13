import React from "react";
import BackgroundImageProfile from "./BackgroundImage";
import MainImage from "./MainImage";
import "./styles.scss";

const Image = ({url}: { url: string }) => {
    return (
        <div id="image-profile">
            <div id="bg-img-container">
                <BackgroundImageProfile url={url}/>
            </div>
            <div id="main-img-container">
                <MainImage url={url}/>
            </div>
        </div>
    );
};

export default Image;
