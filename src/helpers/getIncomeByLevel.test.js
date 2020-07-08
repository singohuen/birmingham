import getIncomeByLevel from "./getIncomeByLevel";

describe("Test getIncomeByLevel", () => {
  test("Negative value", () => {
    expect(() => getIncomeByLevel(-5)).toThrow("Invalid income level.");
  });

  test("Normal value", () => {
    expect(getIncomeByLevel(5)).toBe(-5);
  });

  test("Too high level", () => {
    expect(() => getIncomeByLevel(200)).toThrow("Invalid income level.");
  });
});
