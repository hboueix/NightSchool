import React from 'react';

const Deck = require('card-deck');

function shuffle(a: Object[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export interface Card {
	value: string;
	front: string;
	back: string;
}

export class Card implements Card {
	value: string;
	front: string;
	back: string;

	constructor(value: string, back: string = '2B') {
		let baseRoute = 'assets/img/cards/';
		this.value = value;
		this.front = `${baseRoute}${this.value}.svg`;
		this.back = `${baseRoute}${back}.svg`;
	}
}

let cardValues = ['T', 'J', 'Q', 'K', 'A'];
for (let i=9; i > 1; i--) {
	cardValues.unshift(i.toString())
}
const symbols = ['C', 'D', 'H', 'S']
const allCards = [];
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

export interface Game {
	fullDeck: typeof Deck
	decks: typeof Deck[]
	discards: Card[]
	cardPulled: Card
	pullHistory: Card[]
}

export const defaultGame: Game = {
	fullDeck: new Deck(allCards),
	decks: pullableDecks,
	discards: [],
	cardPulled: new Card('1J'),
	pullHistory: []
}

interface GameContext {
    initContext: () => void,
	game: Game,
	updateGame: (updatedGame: Game) => void,
	getTotalRemaining: () => number
}

const GameContext = React.createContext<GameContext>({
    initContext: () => { },
	game: defaultGame,
	updateGame: () => { },
	getTotalRemaining: () => fullDeck.length
});

export default GameContext