import React from 'react';

// export interface GameOptions {
//     id: string, 
//     nombreProfile: number,
//     customRules: boolean,
//     listeProfile: Array<Profile>,
// }
export interface Profile {
    id: string,
    username: string,
    picture: string
}

export const defaultProfile: Profile = {
    id: '0',
    username: "Dupond",
    picture: "assets/img/default-profile.png"
}

// export const defaultGameOptions: GameOptions = {
//     id: '0',
//     nombreProfile: 2,
//     customRules: false,
//     listeProfile: [defaultProfile]
// }

interface AppContext {
    initContext: () => void,
    profiles: Profile[],
    addProfile: (newProfile: Profile) => void,
    deleteProfile: (id: string) => void
    updateProfile: (updatedProfile: Profile) => void,
    // gameoptions: GameOptions,
    // updateGameOptions: (updatedGameOptions: GameOptions) => void
}

const AppContext = React.createContext<AppContext>({
    initContext: () => { },
    profiles: [],
    addProfile: () => { },
    deleteProfile: () => { },
    updateProfile: () => { },
    // gameoptions: defaultGameOptions,
    // updateGameOptions: () => { }
});

export default AppContext