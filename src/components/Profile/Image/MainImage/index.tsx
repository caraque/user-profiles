import React from "react";
import "./styles.scss"

const MainImage = ({url, height = ''}: { url: string, height?: string }) => {
    return <img id="main-image" alt="main-profile-img" src={url} height={height} />
};

export default MainImage;
