import React from "react";
import ImageProfile from "./Image";
import {Card} from "@mui/material";
import Data from "./Data";
import "./styles.scss";

const Profile = ({profile, isModal}: { profile: any, isModal?: boolean }) => {
    return (
        <Card id="profile-card">
            <ImageProfile url={profile.imageUrl}/>
            <Data profile={profile} isModal={isModal}/>
        </Card>
    )
};

export default Profile;
