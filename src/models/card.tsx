export type Card = {
  title: string;
  cost: number;
  type: CardType;
  text: string;
  victoryPoint: number | null;
  color: string;
}

type CardType = '地球' | '宇宙' | '科学'