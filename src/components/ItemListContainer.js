import ItemCount from "./ItemCount"

const onAdd = (cont) => {
    console.log(cont)
  }

const ItemListContainer = ({name}) => {
    return (
        <div>
            <p>Bienvenido {name}</p>
            <ItemCount stock={7} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer