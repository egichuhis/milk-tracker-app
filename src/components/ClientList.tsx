import "./ClientList.css";
import Accordion from "../components/Accordion";

interface ContainerProps {
  name: string;
}

const ClientList: React.FC<ContainerProps> = ({ name }) => {
  return (
    <>
      <Accordion/>
    </>
  );
};

export default ClientList;
