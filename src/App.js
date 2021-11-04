import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter , Switch , Route  } from 'react-router-dom';



const App = () => {
    return (
        <BrowserRouter>
        <Switch>
                    <NavBar/>
                <Route path="/" component = {ItemListContainer} exact>
                    <ItemListContainer name="Jose"/>
                </Route>
                <Route path="/categoria/:id" component = {ItemListContainer} exact>
                    <ItemDetailContainer/>
                </Route>
        </Switch>
        </BrowserRouter>
    )
}




export default App