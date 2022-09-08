const fruits = ["Apple", "Watermelon", "Lemon", "Papai", "Orange"];
const regex = /^A/gi;
const startsWithA = fruits.filter( fruit => {
    return regex.test( fruit );
} );
console.log( startsWithA );