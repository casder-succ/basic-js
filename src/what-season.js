/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  try {
    if (!date) return 'Unable to determine the time of year!';
    date.getTime();

    const seasonCurr = Math.floor((date.getMonth() + 1) / 3) % 4;
    return ['winter', 'spring', 'summer', 'autumn'][seasonCurr];
  } catch (e) {
    throw new Error('Invalid date!');
  }
}
