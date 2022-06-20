export const getProfiles = () => {
    return fetch(`${process.env.REACT_APP_API_USERS}`)
        .then(data => data.json())
        .then(profiles => {
                return profiles.results.map((profile: any) => ({
                    name: profile.name.first,
                    lastname: profile.name.last,
                    cell: profile.cell,
                    email: profile.email,
                    imageUrl: profile.picture.large,
                }));
            }
        )
};
