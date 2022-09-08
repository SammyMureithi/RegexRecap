const string = 'However, it is likely that some users will type the wrong   password. To help them see the password that they’re currently entering, you can add a button that allows them to toggle the password visibility.'
//we are matching avery "likeky" word that comes before the "that" word
const regex = /likely(?= that)/gi;
console.log("LookAhead")
console.log( string.match( regex ) );

//let's match all "likely" word that don't come after the word that ,we expect to find none

const myRegex = /likely(?! that)/gi;
console.log("!LookAhead")
console.log( string.match( myRegex ) );