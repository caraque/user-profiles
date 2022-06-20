import {createSlice} from '@reduxjs/toolkit';

interface Friend {
    id: number;
    name: string;
    lastname: string;
    cell: string;
    email: string;
    imageUrl: string;
}

interface FriendState {
    value: Friend[];
}

const initialState: FriendState = {
    value: [],
}

const friendSlice = createSlice({
    name: 'friend',
    initialState,
    reducers: {
        addAllFriends(state, friendList) {
            state.value = friendList.payload;
        },
        addFriend(state, friend) {
            state.value.push(friend.payload);
        },
        removeFriend(state, friend) {
            const index = state.value.findIndex(f => f.id === friend.payload.id);
            state.value.splice(index, 1);
        }
    }
});

export const {addAllFriends, addFriend, removeFriend} = friendSlice.actions;
export default friendSlice.reducer;
