// import { Plugins } from '@capacitor/core';
import {
    IonButton,
    IonCol,
    IonContent,
    IonFab,
    IonFabButton,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React, { useContext, useRef, useState } from 'react';
import AppContext, { Profile } from '../data/app-context';
import ResponsiveContent from './ResponsiveContent';
import { CameraResultType, Plugins } from '@capacitor/core';
import { camera } from 'ionicons/icons';
import { ROUTE_OPTIONS } from '../nav/Routes';

const { Camera } = Plugins;

const EditProfileModal: React.FC<{showModal: boolean, id: number, setShowModal: (value: boolean) => void }> = (props) => {
    // const idRef = useRef<HTMLIonInputElement>(null);
    const usernameRef = useRef<HTMLIonInputElement>(null);
    const appCtx = useContext(AppContext);
    const [picture, setPicture] = useState<string>("assets/img/default-profile.png");

    const resetModal = () => {
    }

    const editHandler = async () => {
        let updatedProfile = appCtx.profiles[props.id-1] 
        updatedProfile.username = usernameRef.current?.value ? usernameRef.current?.value?.toString() : "Joueur" +props.id
        updatedProfile.picture = picture
        appCtx.updateProfile(updatedProfile)
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
                    <IonTitle>Modifier username</IonTitle>
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
                                    <IonInput ref={usernameRef} value={appCtx.profiles[props.id-1].username}></IonInput>
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
                                <IonButton onClick={editHandler} routerLink={ROUTE_OPTIONS}>Confirmer</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonFooter>
        </IonModal>
    );
};

export default EditProfileModal;
