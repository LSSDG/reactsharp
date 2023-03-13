import { useRef,useContext } from "react";
import { CartContextProvider } from "../store/cart-context";
import CartContext from "../store/cart-context";
 


const ProductItem=({id,name,desc,price,lquantity,mquantity,squantity})=>{
    const cartCtx=useContext(CartContext);

    const lq=useRef();
    const mq=useRef();
    const sq=useRef();

    const submitHandler=(e)=>{
        e.preventDefault();
        const enteredlq=lq.current.value;
        const enteredmq=mq.current.value;
        const enteredsq=sq.current.value;
        addToCartHandler(enteredlq,enteredmq,enteredsq);

    }
    const addToCartHandler=(lq,mq,sq)=>{
        cartCtx.addItem({
            id:id,
            name:name,
            lquantity:lq,
            mquantity:mq,
            squantity:sq,
            price:price
        })
    }

    return(<li>
        <div><h4>Name:{name}</h4>
        <p>Description:{desc}</p>
        <h4>Price:${price}</h4>
        <h4>Large:{lquantity}</h4>
        <h4>Medium:{mquantity}</h4>
        <h4>Small:{squantity}</h4>
        </div>
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="lq">Large</label>
                <input type="number" id="lq" ref={lq}></input>
                <label htmlFor="mq">Medium</label>
                <input type="number" id="mq" ref={mq}></input>
                <label htmlFor="sq">Small</label>
                <input type="number" id="sq" ref={sq}></input>
                <button type="submit">ADD TO CART</button>
            </form>

        </div>
    </li>)
}

export default ProductItem;