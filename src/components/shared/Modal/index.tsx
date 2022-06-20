import React, {useEffect} from "react";
import {Modal as ModalMU} from "@mui/material";
import './styles.scss';
import Profile from "../../Profile";
import {useAppSelector} from "../../../repository/hooks";
import {useDispatch} from "react-redux";
import {setShowModal} from "../../../repository/modalFriendSlice";

const Modal = ({openModal, handleClose, friend}: { openModal: boolean, handleClose: () => void, friend: any }) => {
    const showModalFriend = useAppSelector(state => state.modalFriend.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setShowModal(openModal));
    }, [openModal]);

    const onCloseHandle = () => {
        dispatch(setShowModal(false));
        handleClose();
    }

    return (
        <div>
            <ModalMU
                open={showModalFriend}
                onClose={onCloseHandle}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal-custom"
            >
                <Profile profile={friend} isModal={true}/>
            </ModalMU>
        </div>
    );
}

export default Modal;
