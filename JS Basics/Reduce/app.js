const prices = [
    99.99, 1.50, 19.99, 49.99, 30,50
]
const total = prices.reduce((total, price)=>total+price);

prices.reduce((min, price)=>{
    if(price<min)
       return price
    
       return min
})