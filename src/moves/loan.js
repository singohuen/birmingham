import getIncomeByLevel from "../helpers/getIncomeByLevel";
import getMaxLevelByIncome from "../helpers/getMaxLevelByIncome";

export default (G, ctx, { player, cardId }) => {
  console.info("Move: loan", { player, cardId });

  const foundCard = G.cards.find((card) => card.id === cardId);
  foundCard.where = "DISCARD";

  G.players[player].money += 30;

  const income = getIncomeByLevel(G.players[player].incomeLevel);

  const newIncome = Math.max(-10, income - 3);

  G.players[player].incomeLevel = getMaxLevelByIncome(newIncome);
};
