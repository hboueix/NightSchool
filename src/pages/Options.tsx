import { IonBackButton, IonButton, IonButtons, IonCheckbox, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import React, { useContext, useState } from 'react';
import AddProfileModal from '../components/AddProfileModal';
import ResponsiveContent from '../components/ResponsiveContent';
import AppContext from '../data/app-context';

const Options: React.FC = () => {
	const [checked, setChecked] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [showModal, setShowModal] = useState(false);


	const appCtx = useContext(AppContext)

	return (
	  <IonPage>
    	<AddProfileModal showModal={showModal} setShowModal={setShowModal} />
		<IonHeader>
		  <IonToolbar>
			<IonButtons slot="start">
				<IonBackButton />
			</IonButtons>
			<IonTitle>Options de la partie</IonTitle>
		  </IonToolbar>
		</IonHeader>
		<IonContent>
		<IonGrid>
			<IonRow>
				<ResponsiveContent>
				<IonLabel>Nombre de joueurs (2 à 8):</IonLabel>
				<IonLabel onClick={() => setShowAlert(true)} className='ion-float-right'>{appCtx.gameoptions.nombreProfile}</IonLabel>
				</ResponsiveContent>
			</IonRow>
			<IonRow>
				<ResponsiveContent>
				<IonLabel>Règles modifiées:</IonLabel>
				<IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
				<IonLabel onClick={() => setShowAlert(true)} className='ion-float-right'>{appCtx.gameoptions.customRules}</IonLabel>
				</ResponsiveContent>
			</IonRow>
			<IonList>
				<IonHeader>
					<IonToolbar>
						<IonLabel>Liste profile</IonLabel>
						<IonButtons slot="end">
							<IonButton onClick={() => setShowModal(true)}>
								<IonIcon icon={closeOutline} />
							</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonHeader> 
				{appCtx.profiles.map((elem: { id: string; username: string; picture: null | string; }) => (
				<IonItem key={elem.id}>
					<IonLabel>{elem.id}</IonLabel>
					<IonLabel>{elem.username}</IonLabel>
					<IonLabel>{elem.picture}</IonLabel>
				</IonItem>
				))}
			</IonList>
		</IonGrid>
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