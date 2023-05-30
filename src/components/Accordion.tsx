import React from "react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
function Accordion() {
  return (
    <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>Mama Waigi</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          First Content
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Justus wa Pastor</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Second Content
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Mama Salome</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Third Content
        </div>
      </IonAccordion>
      <IonAccordion value="fourth">
        <IonItem slot="header" color="light">
          <IonLabel>Mama Sammy</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Fourth Content
        </div>
      </IonAccordion>
      <IonAccordion value="fifth">
        <IonItem slot="header" color="light">
          <IonLabel>Mujamaa</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Fifth Content
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default Accordion;
