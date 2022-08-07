/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr = [];
    for(let i = 1; i<=n; i++) {
      let str = '';
      if (!(i % 3)) str += 'Fizz';
      if (!(i % 5)) str += 'Buzz';
      if (str === '') str = '' + i;
      arr.push(str);
    }
    return arr;
};
