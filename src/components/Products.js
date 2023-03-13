import ProductItem from "./ProductItem"


const Products = ()=>{
    const products=[
        {
            id:1,
            name:'armani-tshirt',
            desc:'made with cotton' ,
            price:12,
            lquantity:20,
            mquantity:20,
            squantity:20,
        },
        {
            id:2,
            name:'nike-tshirt',
            desc:'very comfortable' ,
            price:15,
            lquantity:15,
            mquantity:15,
            squantity:15,
        },
        {
            id:3,
            name:'adidas-tshirt',
            desc:'slimfit' ,
            price:10,
            lquantity:10,
            mquantity:10,
            squantity:10,
        },
    ]
    const productList=<ul>{products.map(item=>{
        return <ProductItem key={item.id} id={item.id} name={item.name} desc={item.desc} price={item.price} lquantity={item.lquantity} mquantity={item.mquantity} squantity={item.squantity}/> 
    })}</ul>
    
    return(<div>
        {productList}
    </div>)
}
export default Products;