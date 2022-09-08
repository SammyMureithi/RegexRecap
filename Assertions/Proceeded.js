const number = "13.142";
//let's match all number that are preceeded by a decimal point
const regex = /(?<=\.)\d+/gi;
console.log( number.match( regex ) );

//lets match all digits that do not appear after the decimal
const myRegex = /(?<!\.)\d+/gi;
console.log( number.match( myRegex ) );