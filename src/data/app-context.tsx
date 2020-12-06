import React from 'react';

export interface Profile {
    id: number,
    username: string,
    picture: string
}

export const defaultProfile: Profile = {
    id: 1,
    username: "Joueur 1",
    picture: "assets/img/default-profile.png"
}

interface AppContext {
    initContext: () => void,
    profiles: Profile[],
    addProfile: (newProfile: Profile) => void,
    deleteProfile: (id: number) => void
    updateProfile: (updatedProfile: Profile) => void,
    agreeDrinkWarning: boolean
}

const AppContext = React.createContext<AppContext>({
    initContext: () => { },
    profiles: [],
    addProfile: () => { },
    deleteProfile: () => { },
    updateProfile: () => { },
    agreeDrinkWarning: false
});

export default AppContext