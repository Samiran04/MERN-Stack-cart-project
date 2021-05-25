import React from 'react';

const Form = (prop) => {
    return(
        <div>
            <form onSubmit = {prop.mySubmitForm}>
                <p>Enter item name</p>
                <input type="text" onChange={prop.myChangeHandler} name="name"></input>
                <p>Enter item quantity</p>
                <input type="number" onChange={prop.myChangeHandler} name="qty"></input>
                <p>Enter item image</p>
                <input type="text" onChange={prop.myChangeHandler} name="img"></input>
                <p>Enter item Price</p>
                <input type="number" onChange={prop.myChangeHandler} name="price"></input>
                <input
                    type='submit'
                />
            </form>
        </div>
    )
}

export default Form;