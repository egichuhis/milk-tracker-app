import './CalendarContainer.css';
import { IonDatetime } from "@ionic/react";

interface ContainerProps {
  name: string;
}

const CalendarContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      {/* Add Calendar */}
      <IonDatetime></IonDatetime>
    </div>
  );
};

export default CalendarContainer;
