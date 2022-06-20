import {createSlice} from '@reduxjs/toolkit';

interface ModalFriendState {
    value: boolean;
}

const initialState: ModalFriendState = {
    value: false,
}

const ModalFriendSlice = createSlice({
    name: 'modalFriend',
    initialState,
    reducers: {
        setShowModal(state, showModal) {
            state.value = showModal.payload;
        }
    }
});

export const {setShowModal} = ModalFriendSlice.actions;
export default ModalFriendSlice.reducer;
