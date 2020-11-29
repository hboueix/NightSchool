import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import './global.css'

const Options: React.FC = () => {
	return (
	  <IonPage>
		<IonHeader>
		  <IonToolbar>
			<IonButtons slot="start">
				<IonBackButton />
			</IonButtons>
			<IonTitle>Options de la partie</IonTitle>
		  </IonToolbar>
		</IonHeader>
		<IonContent className='no-scroll'>
		</IonContent>
		<IonFooter className="ion-text-center">
		  <IonButton routerLink="/board" fill='outline'>
			  Lancer la partie
		  </IonButton>
		</IonFooter>
	  </IonPage>
	);
  };
  
  export default Options;