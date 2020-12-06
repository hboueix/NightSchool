import { IonCol, IonImg } from '@ionic/react';
import React, { useContext, useState } from 'react';

import GameContext from '../data/game-context';

const Deck = require('card-deck');

const IonDeck: React.FC<{
	onClick: (deck: typeof Deck, idDeck: number) => void,
	rotation: '0'|'45'|'90'|'135', 
	position: 't'|'b'|'r'|'l'|'tr'|'tl'|'br'|'bl'
}> = (props) => {

	const [srcDeckImg, setSrcDeckImg] = useState('assets/img/cards/2B.svg');
	const gameCtx = useContext(GameContext);

	const idx = () => {
		switch (props.position) {
			case 'tl':
				return 0
			case 't':
				return 1
			case 'tr':
				return 2
			case 'l':
				return 3
			case 'r':
				return 4
			case 'bl':
				return 5
			case 'b':
				return 6
			case 'br':
				return 7
		}
	}
	let deck = gameCtx.game.decks[idx()]

	const clickOnDeck = () => {
		props.onClick(deck, idx());
		if (deck.remaining() === 0) {
			setSrcDeckImg('assets/img/cards/1J.svg');
		}
	}

	return (
    <IonCol>
		<IonImg id={props.position} 
			class={`deck deg${props.rotation}`} 
			onClick={() => clickOnDeck()}
			src={srcDeckImg} 
			/>
	</IonCol>
	)
}

export default IonDeck