import { IonBackButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { moon } from "ionicons/icons";
import React from 'react';

const Settings: React.FC = () => {
	const toggleDarkModeHandler = () => {
		document.body.classList.toggle("dark");
	  };
	  
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton />
					</IonButtons>
					<IonTitle>Paramètres</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonItem>
				<IonIcon slot="start" icon={moon} />
				<IonLabel>Dark Mode</IonLabel>
				<IonToggle
				slot="end"
				name="darkMode"
				onIonChange={toggleDarkModeHandler}
				/>
			</IonItem>
			</IonContent>
		</IonPage>
	)
}

export default Settings;