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
import AppContext, { Profile } from '../data/app-context';
import ResponsiveContent from './ResponsiveContent';
// import AddPictureNewProfile, { Picture } from './AddPictureNewProfile';

// const { Filesystem } = Plugins;

const EditProfileModal: React.FC<{showModal: boolean, id: number, setShowModal: (value: boolean) => void }> = (props) => {
    // const idRef = useRef<HTMLIonInputElement>(null);
    const usernameRef = useRef<HTMLIonInputElement>(null);
    const appCtx = useContext(AppContext);
    // const [picture, setPicture] = useState<Picture>();    


    const resetModal = () => {
        // setPicture(undefined)
    }

    const editHandler = async () => {
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
            id : props.id,
            username: usernameRef.current?.value ? usernameRef.current?.value?.toString() : "Joueur" +props.id,
            picture : "assets/img/default-profile.png"
            // picture: picture?.filename ? [picture?.filename]
        }
        console.log('props', props.id);
        let test : number = props.id
        console.log('appctx', appCtx.profiles[props.id-1].username);
        appCtx.updateProfile(newProfile)
        props.setShowModal(false)
    }

    // const updatePicture = (newPicture: Picture) => {
    //     setPicture(newPicture)
    // }

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
                                {/* <AddPictureNewProfile updatePicture={updatePicture} /> */}
                                <IonItem>
                                    <IonLabel position="floating">Nom du joueur</IonLabel>
                                    <IonInput ref={usernameRef} value={appCtx.profiles[props.id-1].username}></IonInput>
                                </IonItem>
                            </IonList>
                        </ResponsiveContent>
                    </IonRow>
                    <IonRow className="ion-justify-content-between">
                        <IonCol size="auto" >
                            <IonButton fill="outline" onClick={() => props.setShowModal(false)}>Annuler</IonButton>
                        </IonCol>
                        <IonCol size="auto" >
                            <IonButton onClick={editHandler}>Confirmer</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    );
};

export default EditProfileModal;
