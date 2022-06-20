import React, {useState} from "react";
import {useAppSelector} from "../../../repository/hooks";
import {useDispatch} from "react-redux";
import {List, ListItem} from "@mui/material";
import MainImage from "../../Profile/Image/MainImage";
import "./styles.scss";
import Modal from "../../shared/Modal";
import {setShowModal} from "../../../repository/modalFriendSlice";
import {gsap} from "gsap";

const Friends = () => {
    const [modalFriend, setModalFriend] = useState({});
    const friends = useAppSelector(state => state.friend.value);
    const showModalFriend = useAppSelector(state => state.modalFriend.value);
    const dispatch = useDispatch();

    const openModalHandle = (friend: any) => {
        setModalFriend(friend)
        dispatch(setShowModal(true));
    }

    return (
        <div className="friend-container">
            <List className="friend-list">
                {
                    friends.map((friend: any) => {
                            return (
                                <ListItem
                                    key={`item-friend-${friend.id}`}
                                    onClick={() => openModalHandle(friend)}
                                    className="friend-item"
                                >
                                    <MainImage url={friend.imageUrl} key={`friend-image-item-${friend.id}`} height="85"/>
                                </ListItem>
                            )
                        }
                    )
                }
            </List>
            {
                <Modal openModal={showModalFriend} handleClose={() => dispatch(setShowModal(false))} friend={modalFriend}/>
            }
        </div>
    );
}

export default Friends;
