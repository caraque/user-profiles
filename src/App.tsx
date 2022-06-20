import React, {useEffect, useState} from 'react';
import './App.css';
import Profile from "./components/Profile";
import {getProfiles} from "./services/users";
import { Grid} from "@mui/material";
import Header from "./components/Header";

function App() {
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        getProfiles().then((userList: any) => {
            setProfiles(userList)
        });

    }, [])

    return (
        <>
            <Grid className="header-container">
                <Header />
            </Grid>
            <Grid container spacing={4} columns={{xs: 4, sm: 8, md: 12}} className="user-list-container">
                {
                    profiles.map((profile: any) =>
                        <Grid item xs={4} key={`grid-profile-${profile.email}`}>
                            <Profile key={`profile-${profile.email}`} profile={profile}/>
                        </Grid>
                    )
                }
            </Grid>
        </>
    );
}

export default App;
