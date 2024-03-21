import React, { useEffect, useState } from 'react';
import axios from 'axios';
interface Item {
    itemName : string;
    itemPrice : number;
    
}
let cartItemPrice = 0;
const Cart : React.FC = () => {

    const [items,setItems] = useState<Item[]>([]);
    const [cart,setCart] = useState<Item[]>([]);
    const [totalPrice,setTotalPrice] = useState<number>(0);
    
    useEffect(() => {
        fetchItems();
    });

    const fetchItems = async () => {
        try{
            const response = await axios.get(`https://localhost:7048/api/Shoppingcart/items-prices`);
            setItems(response.data);
        }catch(error){
            console.error('Error message',error);
        }
    };

    const addItemsToCart = (item : Item) => {
        const updatedcart = [...cart,item];
        setCart(updatedcart);
        let totalPriceForItem  = item.itemPrice;
        console.log("totalPriceForItem",totalPriceForItem);
        if(item.itemName === 'A' ){
         let ACount =updatedcart.filter(i => i.itemName === 'A').length 
         console.log("Acount",ACount);
         let discount = Math.floor((ACount/3))*20
         console.log("discount",discount);
         cartItemPrice += (totalPriceForItem)-discount;
         console.log("totalPriceForItemafterDic",totalPriceForItem);
         console.log("Cart",cartItemPrice);
         }
         else if(item.itemName === 'B'){
            let BCount =updatedcart.filter(i => i.itemName === 'B').length 
            console.log("Acount",BCount);
            let discount = Math.floor((BCount/2))*15
            console.log("discount",discount);
            cartItemPrice += (totalPriceForItem)-discount;
            console.log("totalPriceForItemafterDic",totalPriceForItem);
            console.log("Cart",cartItemPrice);
            }
         else{
            cartItemPrice += totalPriceForItem
            console.log("totalPriceForItem",totalPriceForItem);
            console.log("Cart",cartItemPrice);
         }
         setTotalPrice(cartItemPrice)
    };

    

    return (
        <div>
            <h2>Select Items</h2>
            <ul>
                {items.map((item,index)=>(
                    <li key={index}>{item.itemName} - ${item.itemPrice} 
                        <button onClick={()=>addItemsToCart(item)}>Add</button>
                    </li>
                ))}
            </ul>
            <h2>Cart Items</h2>
            <ul>
                {cart.map((item,index)=>(
                    <li key={index}>{item.itemName} - ${item.itemPrice} 
                    </li>
                ))}
            </ul>
            <h2>Total Price : ${totalPrice}</h2>
        </div>   
    );
}

export default Cart;