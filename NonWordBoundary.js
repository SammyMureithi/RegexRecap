const fruits = ["Apple", "Watermelon", "Lemon", "Papai", "Orange"];

const regex = /\Br/gi;
//we are matching every word that has the word "on" and the letters before it is of the same type as on
const NonWordBoundary = fruits.filter( fruit => {
    return regex.test( fruit );
} );
console.log( NonWordBoundary );