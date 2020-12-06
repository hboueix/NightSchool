import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFooter, IonButton } from '@ionic/react';
import React, { useContext } from 'react';
import ResponsiveContent from './ResponsiveContent';
import GameContext from '../data/game-context';

const CardModal: React.FC<{ showModal: boolean, dismissCardModal: () => void, srcCardImg: string }> = (props) => {
  
  const gameCtx = useContext(GameContext);

  return (
    <IonModal isOpen={props.showModal}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Voici ta carte :</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="ion-text-center">
          <IonRow>
            <ResponsiveContent>
              <img src={props.srcCardImg} alt='Card front' />
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
          <IonButton onClick={() => props.dismissCardModal()} fill="outline">OK</IonButton>
        </IonFooter>
      </IonContent>
    </IonModal>
  );
};

export default CardModal;