import { useState, useEffect } from 'react';
import GlobalContext from './GlobalContext';

//Global Provider provides state and logic
function GlobalProvider(props) {
    // Load from localStorage or use defaults
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : {id: 25, name: "Micah", cohort: 61};
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Save user to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    function addProductToCart(prod){
        console.log("Global Add", prod);

        let copy = [...cart];//creates a copy of current cart
        
        // Check if product already exists in cart
        const existing = copy.find(item => item.id === prod.id);
        
        if (existing) {
            // Product already in cart, increase quantity
            existing.quantity += prod.quantity;
        } else {
            // New product, add to cart
            copy.push(prod);
        }
        
        setCart(copy);//update cart with new copy
    }

    function clearCart(){
        setCart([]);   
    }

    function removeProductFromCart(productId){//remove by id
        const updatedCart = cart.filter(item => item.id != productId);//filter out by matching id
        setCart(updatedCart);//update cart with filtered list
    }

    function updateProductQuantity(id, newQuantity) {
        const updatedCart = cart.map(product => {
            if (product.id === id) {
                return { ...product, quantity: newQuantity };
            }
            return product;
        });
        setCart(updatedCart);
    }

    return (
        <GlobalContext.Provider value={{
            cart: cart,//current cart state
            user: user,//current user state
            addProductToCart: addProductToCart,//Adds product
            clearCart: clearCart,//clears cart
            removeProductFromCart: removeProductFromCart,//removes a product
            updateProductQuantity: updateProductQuantity,//updates quantity
        }}>
            {props.children} {/*Render any child components inside the provider*/}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;