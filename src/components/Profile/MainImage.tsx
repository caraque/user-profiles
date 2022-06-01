import React from "react";

const MainImage = ({url}: { url: string }) => {
    return <img alt="image-profile" src={url} style={{ borderRadius: 64 }}/>
};

export default MainImage;
