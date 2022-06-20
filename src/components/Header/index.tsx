import React, {useEffect, useState} from "react";
import Friends from "./Friends";
import "./styles.scss";
import {useAppSelector} from "../../repository/hooks";
import {getFriends} from "../../services/friends";
import {addAllFriends} from "../../repository/friendSlice";
import {useDispatch} from "react-redux";
import {Collapse} from "@mui/material";

const Header = () => {
    const friends = useAppSelector(state => state.friend.value);
    const dispatch = useDispatch();
    const [showHeader, setShowHeader] = useState(false);


    useEffect(() => {
        if (friends.length) {
            setTimeout(() => {
                setShowHeader(true);
            }, 500);
        } else if (!friends.length && showHeader) {
            setTimeout(() => {
                setShowHeader(false);
            }, 200);
        }
    }, [friends, showHeader]);

    useEffect(() => {
        getFriends().then(friendsResponse => {
            dispatch(addAllFriends(friendsResponse));
        });
    }, []);

    return (
        <div className="header">
            <Collapse in={showHeader}>
                    {<Friends/>}
            </Collapse>
        </div>
    );
}

export default Header;
