import { IonBackButton, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { MediaCapture } from '@ionic-native/media-capture';
import { Media, MediaObject} from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file';



const AudioRecord: React.FC = () => {

  // const audioRecorded = async () => {
  //   const data = await MediaObject.startRecord()
  // }

	return (
	  <IonPage>
		<IonHeader>
		  <IonToolbar>
			<IonButtons slot="start">
				<IonBackButton />
			</IonButtons>
			<IonTitle>AudioRecord</IonTitle>
		  </IonToolbar>
		</IonHeader>
		<IonContent>
            <IonFab vertical="bottom" horizontal="center" slot="fixed">
                {/* <IonFabButton onClick={() => captureAudio()}>  */}
                <IonIcon ></IonIcon>
                {/* </IonFabButton> */}
                {/* <IonFabButton onClick={() => play(file)}>  */}
                <IonIcon ></IonIcon>
                {/* </IonFabButton> */}
            </IonFab>
		</IonContent>
	  </IonPage>
	);
  };
  
  export default AudioRecord;