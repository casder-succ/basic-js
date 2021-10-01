
/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members
      .filter((el) => typeof el === 'string')
      .map((el) => el.trim().charAt(0).toUpperCase())
      .sort((letter1, letter2) => letter1.charCodeAt(0) - letter2.charCodeAt(0))
      .join('');
}