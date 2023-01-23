const productCost = 1;
const productValueSale = 3;
let undSale = 300;
let profit;

if (productCost >= 0 && productValueSale >=0) {
    const costWithTax = productCost * 1.2;
    profit = (productValueSale - costWithTax) * undSale;
    console.log(profit);
} else {
    console.log("erro");
}



