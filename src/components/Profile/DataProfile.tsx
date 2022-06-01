import React from "react";
import {Grid} from "@mui/material";

const Profile = ({profile}: { profile: any }) => {
    return (

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
    )
};

export default Profile;
