/**
 * This function calculates the total price of a new order
 * @param {Array} products cartProducts: Array of objects
 * @returns {Number} Total price
 */

export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
}

