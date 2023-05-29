import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Clients.css";
import ClientList from '../components/ClientList';
import AddClientBtn from '../components/FloatingButton';

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
        {/* Add Clients List */}
        <ClientList name="Clients List" />
        <AddClientBtn/>
      </IonContent>
    </IonPage>
  );
};

export default Clients;
