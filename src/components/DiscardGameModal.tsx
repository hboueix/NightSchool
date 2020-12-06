import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonModal, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext } from 'react';
import ResponsiveContent from './ResponsiveContent';
import AppContext, { Profile } from '../data/app-context';
import GameContext, { Card, Game } from '../data/game-context';

const DiscardGameModal: React.FC<{ 
  showModal: boolean, 
  setShowModal: (value: boolean) => void, 
  addCardOnDiscard: (card: Card, updatedGame: Game) => void,
  endTurn: () => void }> = (props) => {
  
  const appCtx = useContext(AppContext);
  const gameCtx = useContext(GameContext);
  
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }  

  const maxIndex = gameCtx.game.pullHistory.length - 1;
  const action = gameCtx.game.pullHistory[getRandomInt(0, maxIndex)];
  const lastAction = gameCtx.game.pullHistory[maxIndex];

  const clickOnProfile = (profile: Profile) => {
    console.log(profile);
    let updatedGame = gameCtx.game;
    if (profile.id === action.id) {
      props.addCardOnDiscard(lastAction.card, updatedGame);
      props.setShowModal(false);
    } else {
      updatedGame.discards = [];
      updatedGame.pullHistory = [];
      gameCtx.updateGame(updatedGame);
      props.setShowModal(false);
      props.endTurn();
    }
  }
  
  return (
		<IonModal isOpen={props.showModal}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>A toi de jouer !</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="ion-text-center">
          <IonRow>
            <ResponsiveContent>
              <img src={action ? action.card.front : ''} alt='Card front' />
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Qui a tiré la carte ci-dessus ?</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                  {appCtx.profiles.map(
                      (elem: { id: number; username: string; picture: string; }) => (
                        <IonItem key={elem.id} onClick={() => clickOnProfile(elem)}>
                          <img className="profile-picture" src={elem.picture} alt='Profil' />
                          <IonLabel className='ion-float-right'>{elem.username}</IonLabel>
                        </IonItem>
                        )
                      )
                    }
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* <IonFooter className='ion-text-center'>
          <IonButton onClick={() => props.setShowModal(false)} fill="outline">OK</IonButton>
        </IonFooter> */}
      </IonContent>
		</IonModal>
	)
}

export default DiscardGameModal;