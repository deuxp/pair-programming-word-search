/*** WORD SEARCHER **\
 * ======================================================================
 * Input        ->  (letters)   - a 2d array of single string letters
 *                  (word)      - a string that you want to search for
 * 
 * Return       ->  Boolean
 * Behaviour    ->  Does not look for words diagonally or backwards
 *                  1. map array method joins the horizontal array into 
 *                     the main list of words (horizontalJoin)
 *                  2. Nested for loops push the the columns to a temporary partition
 *                  3. the column is joined into one string and pushed to 
 *                     the main list of words (horizontalJoin)
 *                  4. Returns boolean if (word) is included in one of the joined strings
 * ======================================================================
 */

const wordSearch = (letters, word) => {
  let horizontalJoin = letters.map(ls => ls.join(''));

  for (let i = 0; i < letters[0].length; i++) {
    ////// i = row
    let vTemp = []; // temp partition for the column letters to be joined into one word
    for (let j = 0; j < letters.length; j++) {
      ///// j = column
      const column = letters[j][i];
      vTemp.push(column);
    }
    let columnWord = vTemp.join(''); // joins the pushed column letters into one word
    horizontalJoin = horizontalJoin.concat(columnWord); // adds the joined column word to the list to check against
  }
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};


module.exports = wordSearch;
