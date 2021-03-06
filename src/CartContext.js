import { createContext, useState } from "react"

export const CartContext = createContext([])
const { Provider } = CartContext

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const [orders, setOrders] = useState([])

    const addToCart = (product, qtty) => {
        if (!isProductInCart(product.id)) {
            const cartProduct = {...product}
            cartProduct.qtty = qtty
            delete cartProduct.stock
            setCart([...cart, cartProduct])
        } else {
            let newCart = [...cart]
            newCart.find((el) => el.id === product.id).qtty += Number(qtty)
            setCart([...newCart])
        }
        product.stock -= qtty;
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter(((el) => el.id !== productId)))
    }

    const clearCart = () => {
        setCart([])
    }

    const isProductInCart = (productId) => {
        return cart.filter(product => product.id === productId).length > 0
    }

    const getCart = () => {
        return cart
    }

    const getProductsQttyInCart = () => {
        return cart.reduce((qtty, product) => {
            return qtty + product.qtty
        }, 0)
    }
    const getProductsTotalInCart = () => {
        return cart.reduce((total, product) => {
            return total + (product.price * product.qtty)
        }, 0).toFixed(2)
    }

    const updateCart = (productId, operation) => {
        const newCart = [...cart];
        if (operation === 'add') {
            newCart.map(el => el.id === productId && el.qtty++ && el)
        } else {
            newCart.map(el => el.id === productId && el.qtty-- && el)
        }
        setCart(newCart)
    }

    const placeOrder = (order) => {
        setOrders([...orders, order])
    }

    const getOrders = () => {
        return orders
    }

    const cartMethods = {
        getCart,
        addToCart,
        removeFromCart,
        clearCart,
        getProductsQttyInCart,
        getProductsTotalInCart,
        updateCart,
        placeOrder,
        getOrders,
    }


    return (
        <Provider value={cartMethods}>
            {children}
        </Provider>
    )
}

export default CartProvider





// import { createContext , useState } from "react";

// export const contexto = createContext();
// const { Provider } = contexto;

// const CustomComponent = ({children}) => {

//     const [cart , setCart] = useState([])

//     const addToCart = (product, cantidad) => {
//         console.log("contexto")
//         console.log(product, cantidad)
    
//     }
    
//     const valorDelContexto = {
//         cart : cart,
//         addToCart : addToCart
//     }

//     return (
//         <Provider value={valorDelContexto}>
//             {children}  
//         </Provider>
//     )
// }

// export default CustomComponent;