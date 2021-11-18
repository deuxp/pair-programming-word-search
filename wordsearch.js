const {transpose} = require('/Users/deuxp/Lighthouse/w4/matrix_transposition.js');

/*** WORD SEARCHER **\
 * ======================================================================
 * Input        ->  (letters)   - a 2d array of single string letters
 *                  (word)      - a string that you want to search for
 * 
 * Return       ->  Boolean
 * Behaviour    ->  Does not look for words diagonally or backwards
 *                  1. map array method joins the horizontal array into 
 *                     the main list of words (horizontalJoin)
 *                  2. traspose is used to join the columns into words
 *                  3. horizontal words and vertical words are put into one big list to check
 *                  4. Returns boolean if (word) is included in one of the joined strings
 * ======================================================================
 */

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join('')); // transpose the 2D array
  const allWords = horizontalJoin.concat(verticalJoin); // creates a main list of all the horizontal and vertical possibilities 

  for (let l of allWords) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
