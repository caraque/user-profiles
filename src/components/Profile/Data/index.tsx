import React from "react";
import {Grid} from "@mui/material";
import "./styles.scss";
import {useAppSelector} from "../../../repository/hooks";
import {useDispatch} from "react-redux";
import {addFriend, removeFriend} from "../../../repository/friendSlice";
import {addFriend as addFriendRequest, deleteFriend as deleteFriendRequest} from '../../../services/friends'
import {setShowModal} from "../../../repository/modalFriendSlice";

const Data = ({profile, isModal}: { profile: any, isModal?: boolean }) => {
    const friends = useAppSelector(state => state.friend.value);
    const dispatch = useDispatch();
    const isFriend = (): boolean => {
        return friends.findIndex(f => f.email === profile.email) !== -1;
    }

    const addFriendHandle = () => {
        const newFriend = {
            name: profile.name,
            lastname: profile.lastname,
            cell: profile.cell,
            email: profile.email,
            imageUrl: profile.imageUrl,
        };

        addFriendRequest(newFriend).then((result: any) => {
            if (!result.error) {
                dispatch(addFriend(result));
            }
        }).catch(error => console.error(error));
    };

    const deleteFriendHandle = () => {
        const unfriend = {
            id: profile.id,
            email: profile.email,
        };

        deleteFriendRequest(unfriend).then((result: any) => {
            if (!result.error) {
                dispatch(removeFriend(unfriend));
                dispatch(setShowModal(false))
            }
        }).catch(error => console.error(error));
    };

    const noFriendSection = () => {
        return (
            <Grid item xs={12} className={'add-friend-section'} onClick={addFriendHandle}>
                <div>Agregar amigo</div>
            </Grid>);
    };

    const friendAddedSection = () => {
        return (
            <Grid item xs={12} className={'added-friend-section'}>
                <div>Ya es tu amigo</div>
            </Grid>);
    };

    const deleteFriendSection = () => {
        return (
            <Grid item xs={12} className={'delete-friend-section'} onClick={deleteFriendHandle}>
                <div>Eliminar amigo</div>
            </Grid>);
    };

    const noModalSection = () => {
        return (
            !isFriend() ?
                noFriendSection() :
                friendAddedSection()
        );
    };

    return (
        <Grid container spacing={2} className="data-container">
            <Grid container item xs={12} spacing={2} className="detail-user">
                <Grid item xs={6} style={{ paddingLeft: 0 }}>
                    <b>Name</b>
                    <div>
                        {profile.name} {profile.lastname}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <b>Cell</b>
                    <div>
                        {profile.cell}
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12} className="email-section detail-user">
                <b>Email</b>
                <div>
                    {profile.email}
                </div>
            </Grid>
            {
                !isModal ?
                    noModalSection() :
                    deleteFriendSection()
            }

        </Grid>
    )
};

export default Data;
