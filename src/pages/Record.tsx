import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import CalendarContainer from "../components/CalendarContainer";
import "./Record.css";

const Record: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Record</IonTitle>
        </IonToolbar>
      </IonHeader>  
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Record</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CalendarContainer name="Record page" />
      </IonContent>
    </IonPage>
  );
};

export default Record;
