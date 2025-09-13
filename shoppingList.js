const shoppingList = [ {
    item : "platano",
    cantidad : 2 ,
    comprado : false}
]

function additem(item, quantity) {
    const newitem ={
        item : item,
        cantidad: quantity,
        comprado: false,};
        shoppingList.push(newitem);

    }
    additem ("peras", 3)
    console.log(shoppingList)