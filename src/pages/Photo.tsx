import { IonBackButton, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { camera, trash, close } from 'ionicons/icons';

const { Camera } = Plugins;

const Photo: React.FC = () => {

    const takePhoto = async () => {
            try {
              const profilePicture = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Base64,
              });
            } catch (error) {
              console.error(error);
            }
          }

	return (
	  <IonPage>
		<IonHeader>
		  <IonToolbar>
			<IonButtons slot="start">
				<IonBackButton />
			</IonButtons>
			<IonTitle>Photo</IonTitle>
		  </IonToolbar>
		</IonHeader>
		<IonContent>
            <IonFab vertical="bottom" horizontal="center" slot="fixed">
                <IonFabButton onClick={() => takePhoto()}> 
                <IonIcon icon={camera}></IonIcon>
                </IonFabButton>
            </IonFab>
		</IonContent>
	  </IonPage>
	);
  };
  
  export default Photo;