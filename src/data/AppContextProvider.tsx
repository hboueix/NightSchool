import React, { useState, useEffect, useRef } from 'react';
import AppContext, { Profile, defaultProfile } from './app-context';

import { Plugins } from '@capacitor/core'

const { Storage } = Plugins;

const AppContextProvider: React.FC = (props) => {
    const [profiles, setProfiles] = useState<Profile[]>([defaultProfile])
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            Storage.set({ key: 'profiles', value: JSON.stringify(profiles) })
        } else {
            didMountRef.current = true;
        }
    }, [profiles])

	const addProfile = (newprofile: Profile) => {
        setProfiles((prevState) => {
            let newList = [...prevState];
            newList.push(newprofile)
            return newList
        })
    }

    const deleteProfile = (id: number) => {
        const index = profiles.map(el => el.id).indexOf(id)
        console.log(index);
        setProfiles((prevState) => {
            let newList = [...prevState];
            console.log(newList);
            newList.splice(index, 1);
            for (let i = index; i < newList.length; i++) {
                newList[i].id--
              }
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


    const initContext = async () => {
        const profilesData = await Storage.get({ key: 'profiles' })
        const storedProfiles = profilesData.value ? JSON.parse(profilesData.value) : defaultProfile;
        didMountRef.current = false;
        setProfiles(storedProfiles)
    }

    return <AppContext.Provider value={{ initContext, profiles, addProfile, deleteProfile, updateProfile}}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider