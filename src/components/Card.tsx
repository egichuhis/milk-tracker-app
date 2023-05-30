import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonItem,
  IonInput,
} from "@ionic/react";
import DatetimeButton from "../components/DatetimeButton";

function Card() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          <DatetimeButton />
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonItem>
          <IonInput label="Milk Sold:"></IonInput>
        </IonItem>
        <IonButton fill="clear">Edit</IonButton>
        <IonButton fill="clear">Save</IonButton>
      </IonCardContent>
    </IonCard>
  );
}
export default Card;
