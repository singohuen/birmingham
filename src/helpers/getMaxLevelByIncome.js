import incomeConfig from "../config/income";

export default (income) => {
  const filteredIncomes = incomeConfig.filter((i) => i.income === income);

  if (filteredIncomes.length === 0) throw new Error("Invalid income value.");

  const mappedLevels = filteredIncomes.map((i) => i.level);

  return Math.max(...mappedLevels);
};
