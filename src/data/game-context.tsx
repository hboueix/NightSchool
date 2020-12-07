import React from 'react';
import { defaultProfile, Profile } from './app-context';

const Deck = require('card-deck');

export const shuffle = (a: Object[]) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const defaultRules: {[id: string] : string} = {
	'2': 'Tu peux distribuer 2 gorgées.',
	'3': 'Tu peux distribuer 3 gorgées.',
	'4': 'Tu peux distribuer 4 gorgées.',
	'5': 'Tu peux distribuer 5 gorgées.',
	'6': 'Tu peux distribuer 6 gorgées.',
	'7': '"Dans ma valise"',
	'8': '"J\'ai déjà / Je n\'ai jamais"',
	'9': '"La lettre"',
	'T': '"Jeu des thèmes"',
	'J': 'Tu es maintenant le Roi des pouces',
	'Q': '"Gorgée du peuple"',
	'K': 'Tu peux inventer une règle',
	'A': 'Eeeeh... c\'est le cul sec !'
}

export interface Card {
	value: string;
	front: string;
	back: string;
	rule: string;
}

export class Card implements Card {
	value: string;
	front: string;
	back: string;
	rule: string;

	constructor(value: string, back: string = '2B') {
		let baseRoute = 'assets/img/cards/';
		this.value = value;
		this.front = `${baseRoute}${this.value}.svg`;
		this.back = `${baseRoute}${back}.svg`;
		this.rule = defaultRules[this.value[0]]
	}
}

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

export interface Game {
	fullDeck: typeof Deck
	decks: typeof Deck[]
	discards: Card[]
	cardPulled: Card
	pullHistory: {id: number, card: Card}[]
	currentPlayer: Profile
}

export const defaultGame: Game = {
	fullDeck: new Deck(allCards),
	decks: pullableDecks,
	discards: [],
	cardPulled: new Card('1J'),
	pullHistory: [],
	currentPlayer: defaultProfile
}

interface GameContext {
    initContext: () => void,
	game: Game,
	initGame: () => void,
	updateGame: (updatedGame: Game) => void,
	getTotalRemaining: () => number
}

const GameContext = React.createContext<GameContext>({
    initContext: () => { },
	game: defaultGame,
	initGame: () => { },
	updateGame: () => { },
	getTotalRemaining: () => fullDeck.length
});

export default GameContext