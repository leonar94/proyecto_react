import { useContext , useState , useEffect } from "react"
import { CartContext } from "../CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    // const {cart}= useContext(contexto)
    // console.log(cart)

    const [showCartDetails, setShowCartDetails] = useState(false)
    

    const cartContext = useContext(CartContext)

    const [productsInCart, setProductsInCart] = useState(0)

    useEffect(() => {
        const getProductsInCart = () => {
            setProductsInCart(cartContext.getProductsQttyInCart())
        }
        getProductsInCart()
    }, [cartContext, productsInCart])

    const toggleCartDetails = () => {
        setShowCartDetails(showCartDetails ? false : true)
    }

    return (
        <div className="cart-widget">
        <button className="shopping-cart" onMouseEnter={toggleCartDetails}>

            <span className="material-icons">
                shopping_cart
            </span>
            {
                productsInCart > 0 && <span>{ productsInCart }</span>
            }
        </button>
        <div className={'shopping-cart__details' + (showCartDetails ? '' : ' hidden')} onMouseLeave={toggleCartDetails}>
            {
                productsInCart > 0 ? (
                    <>
                        <Link to={'/cart'} className="go-to-checkout">
                            Checkout
                            <span className="material-icons">
                                shopping_cart_checkout
                            </span>
                        </Link>
                    </>
                ) : (
                    <>
                        <h3>You don't have products in your cart</h3>
                        <p>Add some products to </p>
                    </>
                )
            }
        </div>
    </div>
        // <div className="cart-widget">
        // {/* <img className="carrito"
        // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJL4dMmQteYQtD8olbw2Vv2TbRepTDVEe8A&usqp=CAU' alt='carrito'/> */}
        // <span className="material-icons md-48" id="carrito">
        //     shopping_cart
        // </span>
        
        // </div>
    )
}

export default CartWidget