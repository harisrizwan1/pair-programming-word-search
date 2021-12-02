
const transpose = function(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const newRow = [];
    for (const row of matrix) {
      newRow.push(row[i]);
    }
    result.push(newRow);
  }
  return result;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (const r of verticalJoin) {
    if (r.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;