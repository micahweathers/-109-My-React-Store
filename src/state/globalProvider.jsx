import { useState } from 'react';
import GlobalContext from './GlobalContext';

//Global Provider provides state and logic
function GlobalProvider(props) {
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({id: 25, name: "Micah", cohort:61})

    function addProductToCart(prod){
        console.log("Global Add", prod);

        let copy = [...cart]//creates a copy of current cart
        copy.push(prod)//adds new product to cart
        setCart(copy)//update cart with new copy
        //Simpler is better for teamwork
    }

    function clearCart(){
        setCart([])   
    }

    function removeProductFromCart(productId){//remove by id
        const updatedCart = cart.filter(item => item.id != productId)//filter out by matching id

        setCart(updatedCart)//update cart with filtered list
    }

    return (
        <GlobalContext.Provider value={{
            cart: cart,//current cart state
            user: user,//current user state
            addProductToCart: addProductToCart,//Adds product
            clearCart: clearCart,//clears cart
            removeProductFromCart: removeProductFromCart//removes a product
        }}>
            {props.children} {/*Render any child components inside the provider*/}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;