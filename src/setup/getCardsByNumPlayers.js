import cards from "../config/cards";

export default (numPlayers) =>
  cards
    .filter((card) => card.players <= numPlayers)
    .map((card) => ({
      ...card,
      where: "DRAW_PILE",
    }));
