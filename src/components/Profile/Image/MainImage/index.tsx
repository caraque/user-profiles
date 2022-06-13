import React from "react";
import "./styles.scss"

const MainImage = ({url}: { url: string }) => {
    return <img id="main-image" alt="image-profile" src={url}/>
};

export default MainImage;
