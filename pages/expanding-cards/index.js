import { useState } from "react";
import Card from "../../components/expanding-cards/cards";

const CARD_DETAILS = [
  { bgImage: "explore", isActive: true, title: "Explore the World" },
  { bgImage: "forest", isActive: false, title: "Wild Forest" },
  { bgImage: "sunny", isActive: false, title: "Sunny Beach" },
  { bgImage: "winter", isActive: false, title: "City on Winter" },
  { bgImage: "mountains", isActive: false, title: "Mountains - Clouds" },
];

const ExpandingCards = () => {
  const [cardDetails, setCardDetails] = useState(CARD_DETAILS);

  function handleClickActive(title) {
    const newCardDetails = CARD_DETAILS.map((cardDetail) => {
      if (cardDetail.title === title) {
        cardDetail.isActive = true;
      } else {
        cardDetail.isActive = false;
      }
      return cardDetail;
    });
    setCardDetails(newCardDetails);
  }

  const cards = CARD_DETAILS.map(({ bgImage, isActive, title }) => (
    <Card
      bgImage={bgImage}
      isActive={isActive}
      title={title}
      onClickActiveHandler={() => handleClickActive(title)}
    />
  ));

  return (
    <div className="font-Rubik font-light flex h-screen items-center m-auto text-2xl sm:text-5xl md:text-7xl w-11/12 overflow-hidden">
      {cards}
    </div>
  );
};

export default ExpandingCards;
