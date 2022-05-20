import React from "react";
import ProfileImage from "../ProfileImage";
import {Card, Grid} from "@mui/material";

const Profile = ({profile}: { profile: any }) => {
    console.log(profile);
    return (
        <Card style={{width: 287, textAlign: 'center', margin: 'auto'}}>
            <ProfileImage url={profile.picture.large}/>
            <Grid container spacing={2} style={{padding: 10}}>
                <Grid item xs={6}>
                    <div>Name:</div>
                    <div>
                        {profile.name.first} {profile.name.last}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>Cell:</div>
                    <div>
                        {profile.cell}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div>Email:</div>
                    <div>
                        {profile.email}
                    </div>
                </Grid>
            </Grid>
        </Card>
    )
};

export default Profile;
