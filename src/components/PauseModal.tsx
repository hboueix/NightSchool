import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonButtons, IonIcon } from '@ionic/react';
import React from 'react';
import { closeOutline } from 'ionicons/icons';
import { ROUTE_OPTIONS, ROUTE_HOME } from '../nav/Routes';

const PauseModal: React.FC<{ showModal: boolean, setShowModal: (value: boolean) => void }> = (props) => {

  return (
    <IonModal isOpen={props.showModal}>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="end">
          <IonButton onClick={() => props.setShowModal(false)}>
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
          <IonButton onClick={() => props.setShowModal(false)} fill="outline">Reprendre</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
          <IonButton routerLink={ROUTE_OPTIONS} onClick={() => props.setShowModal(false)} fill="outline">Recommencer</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
          <IonButton routerLink={ROUTE_HOME} onClick={() => props.setShowModal(false)} fill="outline">Quitter la partie</IonButton>
          </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default PauseModal;