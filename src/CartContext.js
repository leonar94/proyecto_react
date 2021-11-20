import { createContext , useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CustomComponent = ({children}) => {

    const [cart , setCart] = useState([])

    const addToCart = (product, cantidad) => {
        console.log("contexto")
        console.log(product, cantidad)
    
    }
    
    const valorDelContexto = {
        cart : cart,
        addToCart : addToCart
    }

    return (
        <Provider value={valorDelContexto}>
            {children}  
        </Provider>
    )
}

export default CustomComponent;