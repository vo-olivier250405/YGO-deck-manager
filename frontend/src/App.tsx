import "./App.css";
import Decks from "./components/Decks";
import Home from "./components/Home";
import useCardStore from "./stores/cardStore";
import { Card } from "./types";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks" element={<Decks />} />
      </Routes>
    </Router>
  );
}

export default App;
