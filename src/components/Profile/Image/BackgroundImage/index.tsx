import React from "react";
import "./styles.scss"
const BackgroundImage = ({url}: { url: string }) => {
    return <img
        alt="img-background-profile"
        src={url}
        className="bg-img-profile" />
};

export default BackgroundImage;
