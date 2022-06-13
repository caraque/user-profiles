import React from "react";
import "./styles.scss"
const BackgroundImage = ({url}: { url: string }) => {
    return <img
        alt="image-background-profile"
        src={url}
        className="bg-img-profile" />
};

export default BackgroundImage;
