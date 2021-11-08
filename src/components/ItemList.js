import Item from './Item'

const ItemList = ({param}) => {
    return (
        <>
        { param && param.length > 0 ?
        param.map (producto => {
            return <div key={producto.id}>
                <Item item={producto} />
                </div>
        })    
        : "Error"}
        </>
    )
}



// const ItemList = ({productos}) => {

//     return (
//         <>
//         {productos.map(producto => <Item key={producto.id} producto={producto}/>)}
//         </>
//     )
// }
        

export default ItemList