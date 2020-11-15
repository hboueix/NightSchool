import { IonCol, IonImg } from '@ionic/react';
import React from 'react';

const Discards: React.FC = (props) => (
    <IonCol>
		<IonImg id='discard-deck' class='deck' 
			onClick={() => console.log('click on discard deck')} 
			src='assets/img/cards/AC.svg' 
			/>
    </IonCol>
)

export default Discards