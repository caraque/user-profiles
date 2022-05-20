import React from "react";
import ProfileBackgroundImage from "./ProfileBackgroundImage";
import MainImage from "./MainImage";

const ProfileImage = ({url}: { url: string }) => {
    return (
        <div id="profileImage" style={{ position: 'relative', left: 0, top: 0 }}>
            <div style={{ overflow: 'hidden', position: 'relative' }}>
                <ProfileBackgroundImage url={url}/>
            </div>
            <div style={{
                position: 'absolute',
                width: 287,
                top: 70
            }}>
                <MainImage url={url} />
            </div>
        </div>
    );
};

export default ProfileImage;
