import { IonBackButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Settings: React.FC = () => {

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
		</IonPage>
	)
}

export default Settings;