import React from 'react';

const CartItem = (prop) => {
    
    const {products} = prop;

    return(
        <div>
            <div><b>Total Cost:</b> {prop.count}</div>
            {products.map((product) => {
                return(
                <div>
                    <img src={product.img} style= {{width: 100}}>
                    </img>
                    <div>{product.name}</div>
                    <div>{product.qty}</div>
                    <div>{product.price}</div>
                    <img src="https://image.flaticon.com/icons/png/512/992/992651.png" alt= "Plus" style={{
                        width: 30
                    }} onClick = {() => prop.increaseQuantity(product)}></img>
                    <img src="https://image.flaticon.com/icons/png/512/992/992683.png" alt="Minus" onClick = {() => prop.decreaseQuantity(product)} style={{
                        width: 30}}></img>
                    <img src="https://image.flaticon.com/icons/png/512/3096/3096673.png" alt="Delete" onClick = {() => prop.deleteItem(product.id)} style={{
                            width: 30
                        }
                    }></img>
                </div>)
            })}
        </div>
    )
}

export default CartItem;