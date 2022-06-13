import React from "react";
import ImageProfile from "./Image";
import {Card} from "@mui/material";
import Data from "./Data";
import "./styles.scss";

const Profile = ({profile}: { profile: any }) => {
    return (
        <Card id="profile-card">
            <ImageProfile url={profile.picture.large}/>
            <Data profile={profile}/>
        </Card>
    )
};

export default Profile;
