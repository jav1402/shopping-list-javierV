let shoppingList = []

let firstProduct = {
    item: "platano",
    cantidad: 2,
    comprado: false
}

shoppingList.push(firstProduct)

let secondProduct = {
    item: "peras",
    cantidad: 5,
    comprado: false
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

function additem(item, cantidad) {
    let newitem = {
        item: item,
        cantidad: cantidad,
        comprado: false,
    };
    shoppingList.push(newitem);

}
additem("limones", 3)


function removeItem(list, index) {
    list.splice(index, 1)
    return list
}


function updateItem(list, index, newItem, newQuantity) {
    let updatedProduct = list[index];
    updatedProduct.item = newItem;
    updatedProduct.quantity = newQuantity;
    return list;
}

console.table(shoppingList)


  
 shoppingList = removeItem(shoppingList, 3);
 console.table(shoppingList); 
 
 
 shoppingList = updateItem(shoppingList, 1, "Kiwi", 6);
 console.table(shoppingList); 