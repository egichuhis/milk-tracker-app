import "./ClientList.css";
import { IonItem, IonLabel, IonList } from "@ionic/react";

interface ContainerProps {
  name: string;
}

const ClientList: React.FC<ContainerProps> = ({ name }) => {
  return (
      <IonList inset={true}>
        <IonItem>
          <IonLabel>Justus</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Mama Moraa</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Mujamaa</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Mama Salome</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Engineer Erick</IonLabel>
        </IonItem>
      </IonList>
  );
};

export default ClientList;
