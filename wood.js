/**
 * fixed: per item wood requirement
 * 1. chair --> 3cft
 * 2. table --> 10cft
 * 3. bed --> 50cft
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const chairWood = 3 * chairQuantity;
  const tableWood = 10 * tableQuantity;
  const bedWood = 50 * bedQuantity;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

console.log("Total wood required:", woodCalculator(1, 1, 1), "cft");
