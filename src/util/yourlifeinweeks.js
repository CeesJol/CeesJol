/**
 * Calculate how many years and weeks a person has spent in their life
 * Used to draw the red cubes on the figure
 */
export const getYearsAndWeeksPassed = (date) => {
  const birthday = new Date(date);
  const currentDate = new Date();

  const res = currentDate - birthday; // Subtract birthday from current date
  const daysTotal = res / 1000 / 3600 / 24;
  let weeks = (daysTotal % 365.25) / 7;
  let years = daysTotal / 365.25;

  // Remove one week, you haven't spent this week yet
  weeks = weeks - 1;

  // Add one year, this will be (partially) filled with weeks
  years = years + 1;

  return [Math.floor(weeks), Math.floor(years)];
};

/**
 * Get the className for a square
 * Used to see if it should be colored or not
 */
export const getSquareClassName = (year, week, yearsPassed, weekNumber) => {
  const className = "squares__square";

  if (year < yearsPassed - 1 || (year < yearsPassed && week <= weekNumber)) {
    return `${className} ${className}--colored`;
  }

  return className;
};

/**
 * Generate a list of numbers from 0 to n
 * Used to map over years and weeks
 */
export const generateNumbersArray = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
};

/**
 * Reset birthday localStorage
 * Used in case birthday is of invalid type (eg. "null")
 */
export const resetLocalStorage = () => {
  localStorage.removeItem("birthday");
};
