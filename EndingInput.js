const fruits = ["Apple", "Watermelon", "Lemon", "Papai", "Orange"];
//we could also use boundary \b to check our endings
const regex = /[e]$/gi;

const endsWithE=fruits.filter( fruit => {
    return regex.test( fruit );
} );
console.log( endsWithE );
const endingInNGE = fruits.filter( fruit => {
    return /nge$/gi.test( fruit );
} );
console.log( endingInNGE );