import React, { useState, useEffect, useRef } from 'react';
import AppContext, { Profile, defaultProfile } from './app-context';

import { Plugins } from '@capacitor/core'

const { Storage } = Plugins;

const AppContextProvider: React.FC = (props) => {
    const [profile, setProfile] = useState<Profile>(defaultProfile)
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            console.log(profile)
            Storage.set({ key: 'profile', value: JSON.stringify(profile) })
        } else {
            didMountRef.current = true;
        }
    }, [profile])

    const updateProfile = (updateProfile: Profile) => {
        setProfile(updateProfile)
    }

    const initContext = async () => {
		const profileData = await Storage.get({ key: 'profile' })
		const storedProfile = profileData.value ? JSON.parse(profileData.value) : defaultProfile;
        didMountRef.current = false;
		setProfile(storedProfile)
    }

    return <AppContext.Provider value={{ initContext, profile, updateProfile }}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider