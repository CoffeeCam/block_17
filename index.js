const coffeeMenu = require('./coffee_data.js');

const drinkMenu = (drink) => {
    return drink.name
};

console.log(coffeeMenu.map(drinkMenu));

const underFive = coffeeMenu.filter(drink =>  drink.price <= 5);

console.log(underFive);

const evenTotal = coffeeMenu.filter(drink => !(drink.price % 2))

console.log(evenTotal);

// print the total if you were to order one of every drink
const initialValue = 0

const allDrinks = coffeeMenu.reduce(
    (accumulator, drink) => accumulator + drink.price,
    0
);
console.log(allDrinks)


const seasonalDrinks = (drink) => {
    return drink.seasonal
};

console.log(coffeeMenu.filter(seasonalDrinks).map(drink => drink.name));

const importedBeans = (drink) => {
    return drink.seasonal
};

console.log(coffeeMenu.filter(importedBeans).map(drink => drink.name + ' with imported beans'));