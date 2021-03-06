import { IonBackButton, IonButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { addOutline,close } from 'ionicons/icons';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import AddProfileModal from '../components/AddProfileModal';
import EditProfileModal from '../components/EditProfileModal';
import ResponsiveContent from '../components/ResponsiveContent';
import AppContext from '../data/app-context';
import GameContext from '../data/game-context';
import { ROUTE_BOARD } from '../nav/Routes';

import './global.css'

const Options: React.FC = () => {
	// const [checked, setChecked] = useState(false);
	// const [showAlert, setShowAlert] = useState(false);
	const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false); 
  const [redirect, setRedirect] = useState(false);
	const [idProfileToEdit, setIdProfileToEdit] = useState<number>(1);

	const clickOnProfile = (elem: { id: number; username: string; picture: string; }) => {
		console.log('elem', elem);
		setIdProfileToEdit(elem.id);
		setEditModal(true);
  }
  
  const startGame = () => {
    gameCtx.initGame();
    setRedirect(true);
  }

	const appCtx = useContext(AppContext);
  const gameCtx = useContext(GameContext);

	return (
	  <IonPage>
    	<AddProfileModal showModal={showModal} setShowModal={setShowModal} />
    	<EditProfileModal showModal={editModal} id={idProfileToEdit} setShowModal={setEditModal} />
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonTitle><b>Options de la partie</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <ResponsiveContent>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>
                    Nombre de joueurs :
                    <IonLabel onClick={() => console.log('nb joueur')} className='ion-float-right'>
                      {appCtx.profiles.length}
                    </IonLabel>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </ResponsiveContent>
          </IonRow>
          {/* <IonRow>
            <ResponsiveContent>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>
                    Règles modifiées:
                    <IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
                    <IonLabel onClick={() => setShowAlert(true)} className='ion-float-right'>{appCtx.gameoptions.customRules}</IonLabel>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </ResponsiveContent>
          </IonRow> */}
          <IonRow>
            <ResponsiveContent>
              <IonCard>
                <IonCardHeader>
                  <IonList>
                    <IonCardTitle>
                      Liste des joueurs :
                      {/* <IonIcon className='' onClick={() => setShowModal(true)} icon={addOutline} /> */}
                    </IonCardTitle>
                    {appCtx.profiles.map(
                      (elem: { id: number; username: string; picture: string; }) => (
                        <IonItem key={elem.id}>
                          <IonCol onClick={() => clickOnProfile(elem)}>
                            <img className="profile-picture" src={elem.picture} alt='Profil' />
                          </IonCol>
                          <IonCol>
                            <IonLabel className='ion-float-right' onClick={() => clickOnProfile(elem)}>{elem.username}</IonLabel>
                          </IonCol>
                          {appCtx.profiles.length !== 1 && 
                          <IonButtons slot="end">
                            <IonButton onClick={() => appCtx.deleteProfile(elem.id)}>
                              <IonIcon icon={close} />
                            </IonButton>
                          </IonButtons>}
                        </IonItem>
                        )
                      )
                    }
                  </IonList>
                </IonCardHeader>
              </IonCard>
            </ResponsiveContent>
          </IonRow>
        </IonGrid>

          {/* <IonList>
            <IonHeader>
              <IonToolbar>
                <IonLabel>Liste profile</IonLabel>
                <IonButtons slot="end">
                  <IonButton onClick={() => setShowModal(true)}>
                    <IonIcon icon={addOutline} />
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
          </IonList> */}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowModal(true)}>
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>

      </IonContent>

      <IonFooter className="ion-text-center">
        <IonButton onClick={() => startGame()} fill='outline'>
          Lancer la partie
          {redirect && <Redirect to={ROUTE_BOARD} />}
        </IonButton>
      </IonFooter>
	  </IonPage>

	);
  };
  
  export default Options;