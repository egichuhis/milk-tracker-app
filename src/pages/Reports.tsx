import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/CalendarContainer";
import "./Reports.css";

const Reports: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reports</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reports</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Add Reports Page */}
      </IonContent>
    </IonPage>
  );
};

export default Reports;
