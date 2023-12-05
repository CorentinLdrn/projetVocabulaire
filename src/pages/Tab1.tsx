import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

import France from "./flags/france.png";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className=" mt-8">
          <div className="flex justify-center gap-6">
            <img className="h-8" src="/flags/france.png" alt="france" />
            <img className="h-8" src="/flags/uk.png" alt="usa" />
            <img className="h-8" src="/flags/brasil.png" alt="brasil" />
            <img className="h-8" src="/flags/russia.png" alt="russia" />
          </div>
          <div>
            <iframe
              className="border-0 frame"
              src="https://calendar.google.com/calendar/embed?src=corentin.laudrin%40gmail.com&ctz=America%2FSao_Paulo"
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
