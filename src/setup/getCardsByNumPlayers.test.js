import getCardsByNumPlayers from "./getCardsByNumPlayers";

describe("FUNC --- getCardsByNumPlayers", () => {
  test("2 players", () => {
    const cards = getCardsByNumPlayers(2);
    expect(cards.length).toBe(40);
    expect(cards.every((card) => card.players <= 2)).toBe(true);
  });

  test("3 players", () => {
    const cards = getCardsByNumPlayers(3);
    expect(cards.length).toBe(54);
    expect(cards.every((card) => card.players <= 3)).toBe(true);
  });

  test("4 players", () => {
    const cards = getCardsByNumPlayers(4);
    expect(cards.length).toBe(64);
    expect(cards.every((card) => card.players <= 4)).toBe(true);
  });
});
