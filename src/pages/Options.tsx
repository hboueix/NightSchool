import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

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
		<IonContent>
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