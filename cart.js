///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
console.log("//////////////////PROBLEM 1////////////////////")
const summedPrice = cart.reduce(function(acc, curr){return acc + curr.price}, 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
console.log("//////////////////PROBLEM 2////////////////////")
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let cartTax = tax *= cartTotal;
    let total1 = cartTax += cartTotal;
    return total1 -= couponValue;
}
console.log(calcFinalPrice(summedPrice, 5, 0.05))
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/


console.log("//////////////////PROBLEM 3////////////////////")
/*
This customer object should have a unique identifier, name, phone number, address, an indicator of 
whether or not we can deliver, the total of their last order, and any coupons
they've accrued. Name, phone, identifier and address should be strings. Delivery indicator 
should be boolean, coupons should be a number, and their last order should be 
either a number or a variable, if I can do that. 
*/
/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let recentOrder = summedPrice
const customer = {
    customerID: '123456789',
    name: 'John Jakob Jingleheimer Schmidt',
    phone: '(555)867-5309',
    address: '1600 Pennsylvania Ave,',
    deliver: false,
    lastOrder: recentOrder,
    deals: 5.00,
}
console.log(customer)