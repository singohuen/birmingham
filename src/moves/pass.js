export default (G, ctx, { player, cardId }) => {
  console.info("Move: pass", { player, cardId });

  const foundCard = G.cards.find((card) => card.id === cardId);
  foundCard.where = "DISCARD";
};
