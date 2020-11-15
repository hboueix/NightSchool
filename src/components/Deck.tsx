import { IonCol, IonImg } from '@ionic/react';
import React from 'react';

const Deck: React.FC<{
	rotation: '0'|'45'|'90'|'135', 
	position: 't'|'b'|'r'|'l'|'tr'|'tl'|'br'|'bl'
}> = (props) => (
    <IonCol>
		<IonImg id={props.position} 
			class={`deck deg${props.rotation}`} 
			onClick={() => console.log('card pulled')} 
			src='assets/img/cards/2B.svg' 
			/>
    </IonCol>
)

export default Deck