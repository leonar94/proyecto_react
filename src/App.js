import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter , Switch , Route  } from 'react-router-dom';
import CustomComponent from './CartContext';
import Cart from './components/Cart';


const App = () => {
    return (
        <BrowserRouter>
        <CustomComponent>
        <NavBar/>
        <Switch>
                <Route path="/" component = {ItemListContainer} exact/>
                <Route path="/ItemDetail/:id" component = {ItemDetailContainer} exact/>
                <Route path="/category/:categoryId" component = {ItemListContainer} exact/>
                <Route path="/cart" component={Cart} />
        </Switch>
        </CustomComponent>
        </BrowserRouter>
    )
}


export default App