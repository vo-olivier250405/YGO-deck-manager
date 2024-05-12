import { create } from "zustand";
import { getAllCards } from "../api";

const allCards = await getAllCards();

const useCardStore = create(() => ({
  cards: allCards,
}));

export default useCardStore;
