import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/CalendarContainer";
import "./Clients.css";

const Clients: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clients</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Clients</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Add Client Page */}
      </IonContent>
    </IonPage>
  );
};

export default Clients;
