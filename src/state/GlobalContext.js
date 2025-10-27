import { createContext } from "react";

//Global Context defines context structure
const GlobalContext = createContext({
    cart: [],//Default cart is empty array
    user: {},//Default user is empty object

    addProductToCart: () => {},//function adds product to cart
    clearCart: () => {},//function to remove all from cart
    removeProductFromCart: () => {},//function to remove specific item from cart
})

//export context for use anywhere
export default GlobalContext;