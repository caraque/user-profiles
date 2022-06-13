import React from "react";
import {Grid} from "@mui/material";
import "./styles.scss";

const Data = ({profile}: { profile: any }) => {
    return (
        <Grid container spacing={2} className="data-container">
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

export default Data;
