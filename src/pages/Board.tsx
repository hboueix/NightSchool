import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import { settings, closeOutline } from 'ionicons/icons';
import ResponsiveContent from '../components/ResponsiveContent';
import Deck from '../components/Deck';
import Discards from '../components/Discards';

import './Board.css'

const Board: React.FC = () => {

  const [showModal, setShowModal] = useState(false);

	return (
		<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Night School</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowModal(true)}>
              <IonIcon icon={settings} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <ResponsiveContent>
              <IonItem id='item-player' className='ion-text-center'>
                <IonLabel id='player-name'>
                  Nom du joueur
                </IonLabel>
              </IonItem>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <Deck rotation='135' position='tl' />
            <Deck rotation='0' position='t' />
            <Deck rotation='45' position='tr' />
          </IonRow>
          <IonRow>
            <Deck rotation='90' position='l' />
            <Discards />
            <Deck rotation='90' position='r' />
          </IonRow>
          <IonRow>
            <Deck rotation='45' position='bl' />
            <Deck rotation='0' position='b' />
            <Deck rotation='135' position='br' />
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonItem>
                <IonLabel>Dans la défausse :</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Reste à jouer :</IonLabel>
              </IonItem>
            </ResponsiveContent>
          </IonRow>
        </IonGrid>
      </IonContent>

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
                <IonButton routerLink="/home" onClick={() => setShowModal(false)} fill="outline">Quitter la partie</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>

		</IonPage>
	)
}

export default Board;