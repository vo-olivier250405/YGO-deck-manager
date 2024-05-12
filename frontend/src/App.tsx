import "./App.css";
import useCardStore from "./stores/cardStore";

function App() {
  const allCards = useCardStore((state) => state.cards);

  return <>{allCards && JSON.stringify(allCards)}</>;
}

export default App;
