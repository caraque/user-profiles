import React from "react";
import ImageProfile from "./ImageProfile";
import { Card } from "@mui/material";
import DataProfile from "./DataProfile";

const Profile = ({profile}: { profile: any }) => {
    return (
        <Card style={{width: 287, textAlign: 'center', margin: 'auto'}}>
            <ImageProfile url={profile.picture.large} />
            <DataProfile profile={profile} />
        </Card>
    )
};

export default Profile;
