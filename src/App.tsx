import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Routes */
import { ROUTE_BOARD, ROUTE_HOME, ROUTE_OPTIONS, ROUTE_SETTINGS, ROUTE_AUDIORECORD } from './nav/Routes';

/* Pages */
import Home from './pages/Home';
import Options from './pages/Options';
import Settings from './pages/Settings';
import Board from './pages/Board';
import AudioRecord from './pages/AudioRecord';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path={ROUTE_HOME} component={Home} exact={true} />
        <Route path={ROUTE_OPTIONS} component={Options} exact />
        <Route path={ROUTE_SETTINGS} component={Settings} exact />
        <Route path={ROUTE_BOARD} component={Board} exact />
        <Route path={ROUTE_AUDIORECORD} component={AudioRecord} exact />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
