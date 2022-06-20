export const getFriends = () => {
    return fetch(`${process.env.REACT_APP_BFF_PATH}/friend`)
        .then(data => data.json())
};

export const addFriend = (friend: any) => {
    return fetch(`${process.env.REACT_APP_BFF_PATH}/friend`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: friend}),
    }).then(data => data.json());
};

export const deleteFriend = (friend: any) => {
    return fetch(`${process.env.REACT_APP_BFF_PATH}/friend`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: friend}),
    }).then(data => data.json());
};
