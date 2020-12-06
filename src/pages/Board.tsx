import { IonAlert, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useState } from 'react';

import { settings, closeOutline } from 'ionicons/icons';
import ResponsiveContent from '../components/ResponsiveContent';
import IonDeck from '../components/IonDeck';

import './global.css'
import './Board.css'

import GameContext from '../data/game-context';
import { ROUTE_HOME, ROUTE_OPTIONS } from '../nav/Routes';

const Deck = require('card-deck');

const Board: React.FC = () => {

  const [srcDiscardImg, setSrcDiscardImg] = useState('');
  const [srcCardImg, setSrcCardImg] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const gameCtx = useContext(GameContext);

  let totalRemaining = gameCtx.getTotalRemaining();
  let totalDiscards = gameCtx.game.discards.length;

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
    let game = gameCtx.game;
    let card = game.pullHistory[game.pullHistory.length - 1];
    setSrcDiscardImg(card.front);
    game.discards.push(card);
    gameCtx.updateGame(game);

    setShowCard(false);
  }

	return (
		<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><b>Night School</b></IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowModal(true)}>
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
                  <IonCardTitle>Nom du joueur</IonCardTitle>
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

      <IonModal isOpen={showCard}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Voici ta carte :</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid className="ion-text-center">
            <IonRow>
              <ResponsiveContent>
                <img src={srcCardImg} alt='Card front' />
              </ResponsiveContent>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Effet de la carte :</IonCardTitle>
                    <IonCardContent>{gameCtx.game.cardPulled.rule}</IonCardContent>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonFooter className='ion-text-center'>
            <IonButton onClick={() => dismissCardModal()} fill="outline">OK</IonButton>
          </IonFooter>
        </IonContent>
      </IonModal>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass='my-custom-class'
        header={'Deck vide'}
        message={"Il n'y a plus de carte dans ce paquet !"}
        buttons={['OK']}
      />	

      <IonModal isOpen={showModal}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowModal(false)}>
                <IonIcon icon={closeOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle>Jeu en pause</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid className="ion-text-center">
            <IonRow>
              <IonCol>
                <IonButton onClick={() => setShowModal(false)} fill="outline">Reprendre</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton routerLink={ROUTE_OPTIONS} onClick={() => setShowModal(false)} fill="outline">Recommencer</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton routerLink={ROUTE_HOME} onClick={() => setShowModal(false)} fill="outline">Quitter la partie</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>

		</IonPage>
	)
}

export default Board;