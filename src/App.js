import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
    return (
        <div>
        <NavBar/>
        <ItemListContainer name="Jose"/>
        <ItemDetailContainer/>
        </div>
    )
}




export default App