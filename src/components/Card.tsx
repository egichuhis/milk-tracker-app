import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonItem,
  IonInput,
} from "@ionic/react";
import DatetimeButton from "../components/DatetimeButton";

function Card() {
  const milkAmt = 2;
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          <DatetimeButton />
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonItem>
          <IonInput>{`Milk Sold: ${milkAmt} Litres`}</IonInput>
        </IonItem>
        <IonButton fill="clear">Edit</IonButton>
        <IonButton fill="clear">Save</IonButton>
      </IonCardContent>
    </IonCard>
  );
}
export default Card;
