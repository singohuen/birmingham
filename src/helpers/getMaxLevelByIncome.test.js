import getMaxLevelByIncome from "./getMaxLevelByIncome";

describe("Test getMaxLevelByIncome", () => {
  test("Normal value", () => {
    expect(getMaxLevelByIncome(5)).toBe(20);
  });

  test("Out of range", () => {
    expect(() => getMaxLevelByIncome(50)).toThrow("Invalid income value.");
  });
});
