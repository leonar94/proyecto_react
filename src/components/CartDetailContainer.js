import { useContext, useEffect, useState } from "react"
import { CartContext } from "../CartContext"
// import transformAmount from "../../../utilities/transformAmount"
import CartDetailItem from "./CartDetailItem"

const CartDetailsContainer = () => {

    const cartContext = useContext(CartContext)

    const [products, setProducts] = useState([])
    const [productsInCart, setProductsInCart] = useState(0)
    const [totalInCart, setTotalInCart] = useState(0)

    useEffect(() => {
        const getProductsInCart = () => {
            setProducts([...cartContext.getCart()])
        }
        const getProductQtty = () => {
            setProductsInCart(cartContext.getProductsQttyInCart())
        }
        const getProductsTotalInCart = () => {
            setTotalInCart(cartContext.getProductsTotalInCart())
        }
        getProductQtty()
        getProductsTotalInCart()
        getProductsInCart();
    }, [cartContext])

    return (
        <>
            {
                products.map((product, i) => {
                    return <CartDetailItem product={product} key={i} />
                })
            }
            {
                productsInCart > 0 && (
                    <>
                        <p className="cart-details__total">
                            Total items: <span>{ productsInCart }</span>
                        </p>
                        <p className="cart-details__total">
                            Cart total: <span>{(totalInCart) }</span>
                        </p>
                    </>
                )
            }
        </>
    )
}

export default CartDetailsContainer