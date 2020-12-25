const { isValid } = require('../dist/leetcode.umd')

console.log(isValid('{}'))
console.log(isValid('(){}[]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))
