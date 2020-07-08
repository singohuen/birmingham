import income from "../config/income";

export default (level) => {
  const foundIncome = income.find((i) => i.level === level);

  if (!foundIncome) throw new Error("Invalid income level.");

  return foundIncome.income;
};
