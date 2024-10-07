const drink = [
    { id: 'drink1', name: 'Martini', price: 2550 },
    { id: 'drink2', name: 'Cappuccino', price: 1370 },
    { id: 'drink3', name: 'Latte', price: 1350 },
    { id: 'drink4', name: 'Mojito', price: 2290 },
];

const food = [
    { id: 'meal1', name: 'Insalata de riso', price: 6750 },
    { id: 'meal2', name: 'Insalata de cipollotti', price: 5990 },
    { id: 'meal3', name: 'Insalata caprese', price: 8250 },
];


function getDrink() {
    let selectedDrinks = [];
    let totalDrink = 0;
    let drinksNames = '';

    for (let i = 0; i < drink.length; i++) {
        if (document.getElementById(drink[i].id).checked) {
            selectedDrinks.push(drink[i]);
            totalDrink += drink[i].price
        }
    }

    for (let i = 0; i < selectedDrinks.length; i++) {
        drinksNames += selectedDrinks[i].name;
        if (i < selectedDrinks.length - 1) {
            drinksNames += ', '
        }
    }
    return { totalDrink, drinksNames };
}

function getFood() {
    let selectedFoods = [];
    let totalFood = 0;
    let foodNames = '';


    for (let i = 0; i < food.length; i++) {
        if (document.getElementById(food[i].id).checked) {
            selectedFoods.push(food[i]);
            totalFood += food[i].price;
        }
    }

    for (let i = 0; i < selectedFoods.length; i++) {
        foodNames += selectedFoods[i].name;
        if (i < selectedFoods.length - 1) {
            foodNames += ', '
        }
    }
    return { totalFood, foodNames };
}

function getTotals() {
    const { totalDrink, drinksNames } = getDrink();
    const { totalFood, foodNames } = getFood();

    document.getElementById('drink').innerText = drinksNames || 'Ninguna bebida seleccionada';
    document.getElementById('drinkPrice').innerText = `$ ${totalDrink.toLocaleString()}`;
    document.getElementById('food').innerText = foodNames || 'Ninguna comida seleccionda';
    document.getElementById('foodPrice').innerText = ` $ ${totalFood.toLocaleString()}`;
    document.getElementById('finalPrice').innerText = ` $ ${(totalDrink + totalFood).toLocaleString()}`
}

document.querySelector('html').onchange = getTotals;
