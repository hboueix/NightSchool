// import { Plugins } from '@capacitor/core';
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
// import uuid from 'react-uuid'
import AppContext, { Profile } from '../data/app-context';
import ResponsiveContent from './ResponsiveContent';
// import AddPictureNewProfile, { Picture } from './AddPictureNewProfile';

// const { Filesystem } = Plugins;

const AddProfileModal: React.FC<{ showModal: boolean, setShowModal: (value: boolean) => void }> = (props) => {
    // const idRef = useRef<HTMLIonInputElement>(null);
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
        let nextId = appCtx.profiles.length + 1
        let newProfile: Profile = {
            id : nextId,
            username: usernameRef.current?.value ? usernameRef.current?.value?.toString() : "Joueur" + nextId,
            picture : "assets/img/default-profile.png"
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
                    <IonTitle>Nouveau joueur</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <ResponsiveContent>
                            <IonList className="ion-padding-bottom">
                                {/* <AddPictureNewProfile updatePicture={updatePicture} /> */}
                                <IonItem>
                                    <IonLabel position="floating">Nom du joueur</IonLabel>
                                    <IonInput ref={usernameRef} value={"Joueur " + (appCtx.profiles.length + 1)}></IonInput>
                                </IonItem>
                            </IonList>
                        </ResponsiveContent>
                    </IonRow>
                    <IonRow className="ion-justify-content-between">
                        <IonCol size="auto" >
                            <IonButton fill="outline" onClick={() => props.setShowModal(false)}>Annuler</IonButton>
                        </IonCol>
                        <IonCol size="auto" >
                            <IonButton onClick={addHandler}>Confirmer</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    );
};

export default AddProfileModal;
