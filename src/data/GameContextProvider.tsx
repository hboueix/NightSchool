import React, { useState, useEffect, useRef, useContext } from 'react';
import GameContext, { Game, defaultGame, Card, shuffle } from './game-context';
import AppContext from './app-context';

import { Plugins } from '@capacitor/core'

const { Storage } = Plugins;

const GameContextProvider: React.FC = (props) => {
    const [game, setGame] = useState<Game>(defaultGame)
    const appCtx = useContext(AppContext);
    const didMountRef = useRef(false);
    
    const Deck = require('card-deck');

    useEffect(() => {
        if (didMountRef.current) {
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
    
    const initGame = () => {
        let cardValues = ['T', 'J', 'Q', 'K', 'A'];
        for (let i=9; i > 1; i--) {
            cardValues.unshift(i.toString())
        }
        const symbols = ['C', 'D', 'H', 'S']
        let allCards = [];
        for (let i=0; i < symbols.length; i++) {
            let symbol = symbols[i];
            for (let j=0; j < cardValues.length; j++) {
                let value = cardValues[j];
                allCards.push(new Card(`${value}${symbol}`))
            }
        }
        let fullDeck = new Deck(allCards);
        let pullableDecks: Object[][] = [
            new Deck(fullDeck.drawRandom(6)),
            new Deck(fullDeck.drawRandom(6)),
            new Deck(fullDeck.drawRandom(6)),
            new Deck(fullDeck.drawRandom(6)),
            new Deck(fullDeck.drawRandom(7)),
            new Deck(fullDeck.drawRandom(7)),
            new Deck(fullDeck.drawRandom(7)),
            new Deck(fullDeck.drawRandom(7))
        ]
        shuffle(pullableDecks);
        let newGame: Game = {
            fullDeck: new Deck(allCards),
            decks: pullableDecks,
            discards: [],
            cardPulled: new Card('1J'),
            pullHistory: [],
            currentPlayer: appCtx.profiles[0]
        }
        console.log('init', newGame)
        setGame(newGame);
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

    return <GameContext.Provider value={{ initContext, game, initGame, updateGame, getTotalRemaining }}>
        {props.children}
    </GameContext.Provider>
}

export default GameContextProvider