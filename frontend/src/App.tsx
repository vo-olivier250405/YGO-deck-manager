import "./App.css";
import useCardStore from "./stores/cardStore";
import { Card } from "./types";

function App() {
  const allCards = useCardStore((state) => state.cards);

  const filteredAllCards = allCards.reduce(
    (acc: { [key: string]: Card[] }, card: Card) => {
      acc[card.archetype] = !acc[card.archetype]
        ? [card]
        : [...acc[card.archetype], card];
      return acc;
    },
    {}
  );

  console.log(filteredAllCards);
  return (
    <>
      {allCards &&
        Object.keys(filteredAllCards).map((e, idx) => <p key={idx}>{e}</p>)}
    </>
  );
}

export default App;
