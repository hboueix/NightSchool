import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import { settings, closeOutline } from 'ionicons/icons';

const Board: React.FC = () => {

  const [showModal, setShowModal] = useState(false);

	return (
		<IonPage>
			{/* <IonFab vertical="top" horizontal="end" slot="fixed">
        <IonFabButton color='light' onClick={() => setShowModal(true)}>
          <IonIcon icon={settings} />
        </IonFabButton>
      </IonFab> */}
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