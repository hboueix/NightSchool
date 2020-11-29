import React from 'react';

export interface Profile {
    id: string,
    username: string,
    picture: string | null,
    loanRate: number,
    insuranceRate: number,
    loanPeriod: number,
    notaryFees: number,
    contribution: number
}

export const defaultProfile: Profile = {
    id: '0',
    username: "Unknown",
    picture: null,
    loanRate: 2,
    insuranceRate: 0.35,
    loanPeriod: 20,
    notaryFees: 8,
    contribution: 0
}

interface AppContext {
    initContext: () => void,
    profile: Profile,
	updateProfile: (updatedProfile: Profile) => void
}

const AppContext = React.createContext<AppContext>({
    initContext: () => { },
    profile: defaultProfile,
	updateProfile: () => { }
});

export default AppContext