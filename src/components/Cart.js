import CartContext from "../store/cart-context";
import { useContext ,useState} from "react";

const Cart = ()=>{
    const cartCtx=useContext(CartContext);
    const [show,setShow]=useState(false);
    const cartItems=cartCtx.items.map(item=>{
        return <li key={item.id}><h3>{item.name}</h3></li>
    })
    const showCart=()=>{
        if(show){
            setShow(false);
        }else{
            setShow(true);
        }
    }

    return(<div>
        <button onClick={showCart}>CART</button>
        {show && cartItems}

    </div>)
}
export default Cart;