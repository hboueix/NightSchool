import { IonButton, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          
          <IonRow>
            <IonCol>
              <IonImg className="ion-margin-top" id="logo" src='assets/img/nightschool.png' alt="Logo NightSchool" />
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
      <IonFooter className="ion-margin-bottom">
        <IonGrid>
          <IonRow className="ion-text-center">
              <IonCol>
                <IonButton routerLink="/game-options" fill='outline'>
                  Jouer
                </IonButton>
              </IonCol>
          </IonRow>
          <IonRow className="ion-text-center">
              <IonCol>
                <IonButton routerLink="/settings" fill='outline'>
                  Paramètres
                </IonButton>
              </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
