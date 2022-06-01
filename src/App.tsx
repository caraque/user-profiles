import React, {useEffect, useState} from 'react';
import './App.css';
import Profile from "./components/Profile";
import {getProfiles} from "./services/profiles";
import {Grid} from "@mui/material";

function App() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        getProfiles().then(profiles => {
            setProfiles(profiles.results)
        });

    }, [])

    return (
        <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: 10, marginBottom: 30 }}>
            {
                profiles.map((profile: any) =>
                    <Grid item xs={4}>
                        <Profile key={profile.id.value} profile={profile}/>
                    </Grid>
                )
            }
        </Grid>
    );
}

export default App;
