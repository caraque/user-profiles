import  {configureStore} from "@reduxjs/toolkit";
import friendReducer from './friendSlice';
import modalFriendReducer from './modalFriendSlice';

export const store = configureStore({
    reducer: {
        friend: friendReducer,
        modalFriend: modalFriendReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
