import { atom } from "recoil";
import { Card } from "../../models/card";

export const editingCardState = atom<Partial<Card>>({
  key: "editingCardState",
  default: {},
});


const cardSelectionValueFromOCR = ['title', 'text']
export const editingCardValueSelectionState = atom({
  key: "editingCardValueSelectionState",
  default: null
})

export const editingCardValueSelecting = atom<boolean>({
  key: "editingCardValueSelecting",
  default: false
})
