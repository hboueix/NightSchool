import React, { useState, useEffect, useRef } from 'react';
import AppContext, { Profile, defaultProfile } from './app-context';

import { Plugins } from '@capacitor/core'

const { Storage } = Plugins;

const AppContextProvider: React.FC = (props) => {
    const [profiles, setProfiles] = useState<Profile[]>([defaultProfile])
    // const [gameoptions, setGameOptions] = useState<GameOptions>(defaultGameOptions)
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            Storage.set({ key: 'profiles', value: JSON.stringify(profiles) })
            // Storage.set({ key : 'gameoptions', value: JSON.stringify(gameoptions)})
        } else {
            didMountRef.current = true;
        }
    }, [profiles])

    // const updateUsername = (newUsername: string) => {
	// 	let updatedProfile = { ...appCtx.profile }
	// 	updatedProfile.username = newUsername;
	// 	appCtx.updateProfile(updatedProfile);
	// }
	const addProfile = (newprofile: Profile) => {
        console.log('2ieme essaie')
        setProfiles((prevState) => {
            let newList = [...prevState];
            newList.push(newprofile)
            return newList
        })
    }

    const deleteProfile = (id: string) => {
        const index = profiles.map(el => el.id).indexOf(id)
        setProfiles((prevState) => {
            let newList = [...prevState];
            newList.splice(index, 1)
            return newList
        })
    }

    const updateProfile = (updateProfile: Profile) => {
        const index = profiles.map(el => el.id).indexOf(updateProfile.id)
        setProfiles((prevState) => {
            let newList = [...prevState];
            newList.splice(index, 1, updateProfile)
            return newList
        })
    }

    // const updateGameOptions = (updatedGameOptions: GameOptions) => {
    //     setGameOptions(updatedGameOptions)
    // }

    const initContext = async () => {
        const profilesData = await Storage.get({ key: 'profiles' })
        // const gameoptionsData = await Storage.get({ key: 'gameoptions' })
        const storedProfiles = profilesData.value ? JSON.parse(profilesData.value) : defaultProfile;
        // const storedGameOptions = gameoptionsData.value ? JSON.parse(gameoptionsData.value) : defaultGameOptions;
        didMountRef.current = false;
        // setGameOptions(storedGameOptions)
        setProfiles(storedProfiles)
    }

    return <AppContext.Provider value={{ initContext, profiles, addProfile, deleteProfile, updateProfile}}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider