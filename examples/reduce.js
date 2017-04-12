const sales = [
{ number:  40 },
{ number: 100 },
{ number:  30 },
{ number:  40 }
]

//Problem: we want to calculate the total sales from sales array 
//We can do it with a for loop 
var total_sales = 0;
for(var i = 0; i < sales.length; i++){
	total_sales += sales[i].number
}

console.log('Total Sales: ' + total_sales)

// functional way (if you want to know what is an arrow function () = > please look at filter.js and map.js examples)
// reduce needs a callback function with 2 params the first is the acumulator), second is the list we want to reduce
// and besides the callback a second paramater with and object that is a starting point or initial value for the acumulator
const total_sales2 = sales.reduce((sum, sale) => sum + sale.number, 0)

console.log('Total Sales: ' + total_sales2)


const total_sales3 = sales.reduce((a,b) => a + b.number, 0)

console.log('Total Sales: ' + total_sales3)

// If you want to look at the intermediate calculations inside the reduce you can do this way
const total_sales4 = sales.reduce((sum, sale) => {
  console.log("Interation " , sum , sale) 
  return sum + sale.number
}, 0)

console.log('Total Sales: ' + total_sales4)




