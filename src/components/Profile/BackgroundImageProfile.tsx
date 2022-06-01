import React from "react";

const BackgroundImageProfile = ({url}: { url: string }) => {
    return <img
        alt="image-background-profile"
        src={url}
        style={{
            height: 287,
            filter: 'drop-shadow(0 0 0.75rem crimson) blur(25px)  brightness(0.9)'
        }} />
};

export default BackgroundImageProfile;
