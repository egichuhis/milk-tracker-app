import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { people, statsChart, documentText } from "ionicons/icons";
import Record from "./pages/Record";
import Clients from "./pages/Clients";
import Reports from "./pages/Reports";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/record">
            <Record />
          </Route>
          <Route exact path="/clients">
            <Clients />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route exact path="/">
            <Redirect to="/record" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="record" href="/record">
            <IonIcon aria-hidden="true" icon={documentText} />
            <IonLabel>Record</IonLabel>
          </IonTabButton>
          <IonTabButton tab="clients" href="/clients">
            <IonIcon aria-hidden="true" icon={people} />
            <IonLabel>Clients</IonLabel>
          </IonTabButton>
          <IonTabButton tab="reports" href="/reports">
            <IonIcon aria-hidden="true" icon={statsChart} />
            <IonLabel>Reports</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
