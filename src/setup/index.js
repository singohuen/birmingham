import getCardsByNumPlayers from "./getCardsByNumPlayers";
import setCities from "./setCities";
import buildings from "../config/buildings";
import buyers from "../config/buyers";

export default (ctx, setupData) => {
  const { numPlayers } = ctx;

  const cards = getCardsByNumPlayers(numPlayers);
  const shuffledCards = ctx.random.Shuffle(cards);
  const dealtCards = shuffledCards.map((card, index) => ({
    ...card,
    where: (() => {
      switch (index) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          return "0";
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
          return "1";
        default:
          return "DRAW";
      }
    })(),
  }));

  const players = Object.assign(
    {},
    new Array(numPlayers).fill({
      buildings,
      money: 17,
      incomeLevel: 10,
    })
  );

  const shuffledBuyers = ctx.random.Shuffle(
    buyers.filter((buyer) => buyer.players <= numPlayers)
  );

  const G = {
    players,
    cities: setCities(),
    cards: dealtCards,
  };

  return G;
};
