import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import CalendarContainer from "../components/CalendarContainer";
import "./Records.css";

const Records: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Records</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Records</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Add Calendar Page */}
        <CalendarContainer name="Records page" />
      </IonContent>
    </IonPage>
  );
};

export default Records;
