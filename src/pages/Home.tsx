import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonImg, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import ResponsiveContent from '../components/ResponsiveContent';

import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          
          <IonRow>
            <ResponsiveContent>
              <IonImg className="ion-margin" id="logo" src='assets/img/nightschool.png' alt="Logo NightSchool" />
            </ResponsiveContent>
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
