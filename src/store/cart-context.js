import React, { useReducer } from "react";
const CartContext=React.createContext();
export default CartContext;

const initialCartState={
    items:[],
    totolPrice:0,
}
const cartReducer= (state,action)=>{
    if(action.type==='ADD'){
            const updatedTotalPrice=state.totalPrice+action.price*(action.lquantity+action.mquantity+action.squantity);
            const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.item.id);
            const existingCartItem=state.items[existingCartItemIndex];
            let updatedItems;
        if(existingCartItem){    
            const updatedItem={
                ...existingCartItem,lquantity:existingCartItem.lquantity+action.item.lquantity,
                mquantity:existingCartItem.mquantity+action.item.mquantity,
                squantity:existingCartItem.squantity+action.item.squantity,
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
            


        }else{
            updatedItems=state.items.concat(action.item);
        }
        return{
            items:updatedItems,
            totalPrice:updatedTotalPrice
        }
    }
    if(action.type==='REMOVE'){
        const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.id);
        const existingCartItem=state.items[existingCartItemIndex];
        const updatedTotalPrice=state.totalPrice-existingCartItem.price;
        let updatedItems;
        if(existingCartItem.lquantity+existingCartItem.mquantity+existingCartItem.squantity===1){
            updatedItems=state.items.filter(item=>item.id!==action.id);
        }else{
            const updatedItem={
                ...existingCartItem,lquantity:existingCartItem.lquantity-action.item.lquantity,
                mquantity:existingCartItem.mquantity-action.item.mquantity,
                squantity:existingCartItem.squantity-action.item.squantity,
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        return{
            items:updatedItems,
            totalPrice:updatedTotalPrice
        }

    }
}

export const CartContextProvider =(props)=>{

    const [cartState,dispatchAction]=useReducer(cartReducer,initialCartState); //useReducer

    const addToCartHandler=(item)=>{
        dispatchAction({
            type:'ADD',
            item:item
        })
    }
    const removeFromCartHandler=id=>{
        dispatchAction({
            type:'REMOVE',
            id:id
        })
    }
    const cartContext={
        items:cartState.items,
        totalPrice:cartState.totalPrice,
        addItem:addToCartHandler,
        removeItem:removeFromCartHandler,
    }
    return(<CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>)
}