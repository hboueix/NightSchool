import { IonAlert, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useState } from 'react';

import { settings } from 'ionicons/icons';
import ResponsiveContent from '../components/ResponsiveContent';
import IonDeck from '../components/IonDeck';
import CardModal from '../components/CardModal';

import './global.css'
import './Board.css'

import GameContext from '../data/game-context';
import AppContext from '../data/app-context';
import PauseModal from '../components/PauseModal';

const Deck = require('card-deck');

const Board: React.FC = () => {

  const [srcDiscardImg, setSrcDiscardImg] = useState('');
  const [srcCardImg, setSrcCardImg] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [pauseModal, setPauseModal] = useState(false);
  const gameCtx = useContext(GameContext);
  const appCtx = useContext(AppContext);

  let totalRemaining = gameCtx.getTotalRemaining();
  let totalDiscards = gameCtx.game.discards.length;

  const getNextPlayer = () => {
    let currentPlayer = gameCtx.game.currentPlayer;
    let nextId = currentPlayer.id + 1;
    if (currentPlayer.id === appCtx.profiles.length) {
      nextId = 1;
    }
    currentPlayer = appCtx.profiles[nextId - 1];
    return currentPlayer;
  }

  const drawCard = (deck: typeof Deck, idDeck: number) => {
		if (!showCard) {
			let card = deck.draw();
			if (card === undefined) {
				setShowAlert(true);
			} else {
        setSrcCardImg(card.front);
				setShowCard(true);
        let updatedGame = gameCtx.game;
        updatedGame.decks[idDeck] = deck;
        updatedGame.cardPulled = card;
        updatedGame.pullHistory.push(card);
        gameCtx.updateGame(updatedGame);
			}
	
			console.log(card);
		}
  }
  
  const dismissCardModal = () => {
    let updatedGame = gameCtx.game;
    let card = updatedGame.pullHistory[updatedGame.pullHistory.length - 1];

    setSrcDiscardImg(card.front);
    updatedGame.discards.push(card);

    let nextPlayer = getNextPlayer();
    updatedGame.currentPlayer = nextPlayer;

    gameCtx.updateGame(updatedGame);

    setShowCard(false);
  }

	return (
		<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><b>Night School</b></IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setPauseModal(true)}>
              <IonIcon icon={settings} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-text-center no-scroll'>
        <IonGrid>
          <IonRow>
            <ResponsiveContent>
              <IonCard>
                <IonCardHeader>
                  <img id='current-player-picture' src={gameCtx.game.currentPlayer.picture} alt='Profile' />
                  <IonCardTitle>{gameCtx.game.currentPlayer.username}</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <IonDeck rotation='135' position='tl' onClick={drawCard} />
            <IonDeck rotation='0' position='t' onClick={drawCard} />
            <IonDeck rotation='45' position='tr' onClick={drawCard} />
          </IonRow>
          <IonRow>
            <IonDeck rotation='90' position='l' onClick={drawCard} />
            <IonCol>
              {srcDiscardImg !== '' &&
              <IonImg id='discard-deck' class='deck' 
                onClick={() => console.log('click on discard deck')} 
                src={srcDiscardImg}
                />
              }
            </IonCol>
            <IonDeck rotation='90' position='r' onClick={drawCard} />
          </IonRow>
          <IonRow>
            <IonDeck rotation='45' position='bl' onClick={drawCard} />
            <IonDeck rotation='0' position='b' onClick={drawCard} />
            <IonDeck rotation='135' position='br' onClick={drawCard} />
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonCard>
                <IonCardContent>
                  <IonCardTitle>{"Dans la défausse : " + totalDiscards}</IonCardTitle>
                </IonCardContent>
                <IonCardContent>
                  <IonCardTitle>{"Reste à jouer : " + totalRemaining}</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </ResponsiveContent>
          </IonRow>
        </IonGrid>
      </IonContent>

      <CardModal showModal={showCard} dismissCardModal={dismissCardModal} srcCardImg={srcCardImg} />

      <PauseModal showModal={pauseModal} setShowModal={setPauseModal} />

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass='my-custom-class'
        header={'Deck vide'}
        message={"Il n'y a plus de carte dans ce paquet !"}
        buttons={['OK']}
      />
		</IonPage>
	)
}

export default Board;