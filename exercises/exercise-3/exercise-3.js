let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function displayOrder(order) {
  console.log(`${'QTY'.padEnd(8)}${'ITEM'.padEnd(20)}${'TOTAL'.toString()}}`)
  console.log('')
  order.forEach(element => {
    let { quantity, itemName, unitPrice} = element;
    console.log(`${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${(unitPrice*quantity).toFixed(2)}`)
  });
  console.log('')
  let total = order.map( item => item.unitPrice*item.quantity).reduce((acc, cur) => acc + cur, 0)
  console.log(`Total: ${total}`)
}

displayOrder(order)