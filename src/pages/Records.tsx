import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import CalendarContainer from "../components/CalendarContainer";
import "./Dairy.css";

const Dairy: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dairy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dairy</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Add Calendar Page */}
        <CalendarContainer name="Dairy page" />
      </IonContent>
    </IonPage>
  );
};

export default Dairy;
