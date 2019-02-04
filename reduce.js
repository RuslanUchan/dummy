const prices = [100, 200, 300, 400, 500]

const ongkir = 10

const totalPrice = prices.reduce((sum, price) => sum + price, ongkir)

console.log(totalPrice)