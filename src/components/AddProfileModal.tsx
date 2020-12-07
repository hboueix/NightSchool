import {
    IonButton,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonRow,
    IonTitle,
    IonToolbar,
    IonFab,
    IonIcon,
    IonFabButton,
    IonImg
} from '@ionic/react';
import React, { useContext, useRef, useState } from 'react';
import AppContext, { Profile } from '../data/app-context';
import ResponsiveContent from './ResponsiveContent';
import { CameraResultType, Plugins } from '@capacitor/core';
import { camera } from 'ionicons/icons';

const { Camera } = Plugins;

const AddProfileModal: React.FC<{ showModal: boolean, setShowModal: (value: boolean) => void }> = (props) => {
    const usernameRef = useRef<HTMLIonInputElement>(null);
    const appCtx = useContext(AppContext);
    const [picture, setPicture] = useState<string>("assets/img/default-profile.png");

    const resetModal = () => {
    }

    const addHandler = async () => {
        let nextId = appCtx.profiles.length + 1
        let newProfile: Profile = {
            id: nextId,
            username: usernameRef.current?.value ? usernameRef.current?.value?.toString() : "Joueur" + nextId,
            picture: picture
        }
        appCtx.addProfile(newProfile)
        props.setShowModal(false)
    }

    const takePhoto = async () => {
        const profilePicture = await Camera.getPhoto({
            quality: 100,
            allowEditing: false,
            resultType: CameraResultType.Uri,
        });
        setPicture(profilePicture.webPath ?? "assets/img/default-profile.png");
        console.log(`lien image : ` + profilePicture.webPath);
    }

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
                                <IonItem>
                                    <img src={picture} alt='Profil' />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Nom du joueur</IonLabel>
                                    <IonInput ref={usernameRef} value={"Joueur " + (appCtx.profiles.length + 1)}></IonInput>
                                </IonItem>
                            </IonList>
                        </ResponsiveContent>
                    </IonRow>
                </IonGrid>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={() => takePhoto()}>
                        <IonIcon icon={camera} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
            <IonFooter>
                <IonGrid>
                    <IonRow className="ion-justify-content-between">
                        <IonCol size="auto" >
                            <IonButton fill="outline" onClick={() => props.setShowModal(false)}>Annuler</IonButton>
                        </IonCol>
                        <IonCol size="auto" >
                            <IonButton onClick={addHandler}>Confirmer</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonFooter>
        </IonModal>
    );
};

export default AddProfileModal;