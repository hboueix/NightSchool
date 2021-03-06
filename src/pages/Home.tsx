import { IonAlert, IonButton, IonCol, IonContent, IonFooter, IonGrid, IonImg, IonPage, IonRow } from '@ionic/react';
import React, { useContext, useState } from 'react';
import ResponsiveContent from '../components/ResponsiveContent';
import AppContext from '../data/app-context';

import './global.css'
import './Home.css'

const Home: React.FC = () => {

  const appCtx = useContext(AppContext);
  const [showAlert, setShowAlert] = useState(!appCtx.agreeDrinkWarning);

  const dismissDrinkWarning = () => {
    appCtx.agreeDrinkWarning = true;
    setShowAlert(false);
  }

  return (
    <IonPage>
      <IonContent className="ion-padding no-scroll">
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

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => dismissDrinkWarning()}
        cssClass='my-custom-class'
        header={'Attention'}
        message={"L'abus d'alcool est dangereux pour la santé. En poursuivant vous confirmez être responsable des éventuelles conséquences que pourrait engendrer l'utilisation de NightSchool."}
        buttons={['OK']}
      />	

    </IonPage>
  );
};

export default Home;
