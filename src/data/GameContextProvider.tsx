import React, { useState, useEffect, useRef } from 'react';
import GameContext, { Game, defaultGame } from './game-context';

import { Plugins } from '@capacitor/core'

const { Storage } = Plugins;

const GameContextProvider: React.FC = (props) => {
    const [game, setGame] = useState<Game>(defaultGame)
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            console.log(game)
            Storage.set({ key: 'game', value: JSON.stringify(game) })
        } else {
            didMountRef.current = true;
        }
    }, [game])

    const initContext = async () => {
		const gameData = await Storage.get({key: 'game'})
		const storedGame = gameData.value ? JSON.parse(gameData.value) : undefined;
        didMountRef.current = false;
		setGame(storedGame)
	}
	
	const updateGame = (updatedGame: Game) => {
		setGame(updatedGame)
    }
    
    const getTotalRemaining = () => {
        let total = 0
        game.decks.forEach(deck => {
            total += deck.remaining();
        });
        return total;
    }

    return <GameContext.Provider value={{ initContext, game, updateGame, getTotalRemaining }}>
        {props.children}
    </GameContext.Provider>
}

export default GameContextProvider