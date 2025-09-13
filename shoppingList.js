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
    let newitem ={
        item : item,
        cantidad: quantity,
        comprado: false,};
        shoppingList.push(newitem);

    }
    additem ("limones", 3)

   /// otra forma de hacerlo seria esta 

//function addItem(list, item,quantity) {
//    let newProduct = {
  //      item: item, // Cocacola
    //    quantity : quantity //cantidad
      //  comprado: false
    //}
    //list.push(newProduct)
    //retun list

//}

//shoppingList = addItem(shoppingList, "sandia", 3) / ashopping list le asigno el resultado de ejecutar additem


    function removeItem(index) {
        shoppingList.splice(index, 1)
    } 
    removeItem(1)


console.table(shoppingList)