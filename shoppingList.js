let shoppingList = []

let firstProduct = {
    item : "platano",
    cantidad : 2,
    comprado : false
}

shoppingList.push(firstProduct)

let secondProduct = {
    item : "peras",
    cantidad : 5,
    comprado : false
}

shoppingList.push(secondProduct)

let threeProduct = {
    item: "melones",
    cantidad: 10,
    comprado: false
}

shoppingList.push(threeProduct)

let fourProduct = {
    item: "zanahorias",
    cantidad: 15,
    comprado: false
}


shoppingList.push(fourProduct)

console.table(shoppingList)

function additem(item, quantity) {
    const newitem ={
        item : item,
        cantidad: quantity,
        comprado: false,};
        shoppingList.push(newitem);

    }
    additem ("limones", 3)
    console.table(shoppingList)
