const fruits = ["Apple", "Watermelon", "Lemon", "Papai", "Orange"];

const regex = /\bw/gi;

//lets fetch everything starting with W or w
const startsWithW = fruits.filter( fruit => {
    return regex.test( fruit );
} );
console.log( startsWithW );