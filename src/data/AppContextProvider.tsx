import React, { useState, useEffect, useRef } from 'react';
import AppContext, { Profile, defaultProfile } from './app-context';

import { Plugins } from '@capacitor/core'

const { Storage } = Plugins;

const AppContextProvider: React.FC = (props) => {
    const [profiles, setProfiles] = useState<Profile[]>([defaultProfile]);
    const [agreeDrinkWarning, setAgreeDrinkWarning] = useState<boolean>(false);
    // const [gameoptions, setGameOptions] = useState<GameOptions>(defaultGameOptions)
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            Storage.set({ key: 'profiles', value: JSON.stringify(profiles) });
            Storage.set({ key: 'agreeDrinkWarning', value: JSON.stringify(agreeDrinkWarning) });
            // Storage.set({ key : 'gameoptions', value: JSON.stringify(gameoptions)})
        } else {
            didMountRef.current = true;
        }
    }, [profiles, agreeDrinkWarning])

	const addProfile = (newprofile: Profile) => {
        console.log('2ieme essaie')
        setProfiles((prevState) => {
            let newList = [...prevState];
            newList.push(newprofile)
            return newList
        })
    }

    const deleteProfile = (id: number) => {
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

    const updateAgree = (value: boolean) => {
        setAgreeDrinkWarning(value);
    }

    const initContext = async () => {
        const profilesData = await Storage.get({ key: 'profiles' })
        const storedProfiles = profilesData.value ? JSON.parse(profilesData.value) : defaultProfile;
        didMountRef.current = false;
        setProfiles(storedProfiles)
    }

    return <AppContext.Provider value={{ initContext, profiles, addProfile, deleteProfile, updateProfile, agreeDrinkWarning, updateAgree}}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider