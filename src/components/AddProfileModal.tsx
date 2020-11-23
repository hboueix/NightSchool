import { Plugins } from '@capacitor/core';
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React, { useContext, useRef } from 'react';
import AppContext, { Profile } from '../data/app-context';
// import AddPictureNewProfile, { Picture } from './AddPictureNewProfile';

const { Filesystem } = Plugins;

const AddProfileModal: React.FC<{ showModal: boolean, setShowModal: (value: boolean) => void }> = (props) => {
    const idRef = useRef<HTMLIonInputElement>(null);
    const usernameRef = useRef<HTMLIonInputElement>(null);
    const appCtx = useContext(AppContext);
    // const [picture, setPicture] = useState<Picture>();    


    const resetModal = () => {
        // setPicture(undefined)
    }

    const addHandler = async () => {
        // Save picture on filesystem
        // if (picture) {
        //     console.log(picture)
        //     await Filesystem.writeFile({
        //         path: picture.filename,
        //         data: picture.base64,
        //         directory: FilesystemDirectory.Data
        //     })
        // }

        let newProfile: Profile = {
            id : "test",
            username: usernameRef.current?.value ? usernameRef.current?.value?.toString() : "username",
            picture : null
            // picture: picture?.filename ? [picture?.filename]
        }
        appCtx.addProfile(newProfile)
        props.setShowModal(false)
    }

    // const updatePicture = (newPicture: Picture) => {
    //     setPicture(newPicture)
    // }

    return (
        <IonModal isOpen={props.showModal} onDidPresent={resetModal}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add new profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol></IonCol>
                    </IonRow>
                </IonGrid>
                <IonList className="ion-padding-bottom" mode="ios">
                    <IonItem>
                        <IonLabel position="floating">Pseudonyme</IonLabel>
                        <IonInput ref={usernameRef} value="new username"></IonInput>
                    </IonItem>
                    {/* <AddPictureNewProfile updatePicture={updatePicture} /> */}
                </IonList>
                <IonGrid>
                    <IonRow className="ion-justify-content-between">
                        <IonCol size="auto" >
                            <IonButton fill="outline" onClick={() => props.setShowModal(false)}>Cancel</IonButton>
                        </IonCol>
                        <IonCol size="auto" >
                            <IonButton onClick={addHandler}>Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    );
};

export default AddProfileModal;