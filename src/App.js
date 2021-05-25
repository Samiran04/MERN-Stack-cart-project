import './App.css';
import React from 'react';
import CartItem from './CartItem';

class App extends React.Component {

  constructor(){
      super();

      this.state = {
          products: [
              
          ],
          test_message: {},
          name: '',
          qty: null,
          img: '',
          price: null
      }
  }

  mySubmitForm = (event) => {
    event.preventDefault();
    const {products} = this.state;
    const {qty} = this.state;
    const {name} = this.state;
    const {price} = this.state;
    const {img} = this.state;

    let obj = {
      name: name,
      qty: qty,
      img: img,
      price: price
    };

    let route = 'http://localhost:8000/add-item/?name=' + name + '&qty=' + qty + '&price=' + price + '&img=' + img;

    fetch(route)
    .then((res) => {
      
    }).catch((err)=>{
      console.log(err);
    })

    products.push(obj);

    this.setState({
      products: products
    })
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  callAPI = () =>{
    fetch('http://localhost:8000/test')
    .then((res) => {
      return res.json();
    }).then((res) => {
      this.products = res.products;
      console.log(res.products);
      this.setState({
        products: res.products
      });
    }).catch((err)=>{
      console.log(err);
    })
  }

  componentDidMount(){
    this.callAPI(); 
  }

  increaseQuantity = (product) => {
      let {products} = this.state;

      let index = products.indexOf(product);

      products[index].qty++;

      //console.log(product._id);

      let route = 'http://localhost:8000/increase/?id=' + product._id;

      fetch(route)
      .then((res) => {
        
      }).catch((err)=>{
        console.log(err);
      })

      this.setState({
          products: products
      })
  }

  decreaseQuantity = (product) => {
      let {products} = this.state;

      let index = products.indexOf(product);

      let route = 'http://localhost:8000/decrease/?id=' + product._id;

      fetch(route)
      .then((res) => {
        
      }).catch((err)=>{
        console.log(err);
      })

      if(products[index].qty > 0)
          products[index].qty--;

      this.setState({
          products: products
      })
  }

  deleteItem = (key) => {
    let {products} = this.state;

    let items = products.filter((product) => product._id !== key);

    let route = 'http://localhost:8000/delete-item/?id=' + key;

    fetch(route)
    .then((res) => {
      
    }).catch((err)=>{
      console.log(err);
    })

    this.setState({
        products: items
    });
  }

  countTotal = () => {
    let {products} = this.state;

    let count = 0;

    products.map((product) => {count += product.price * product.qty});

    return count;
  }

  render() {

    const {products} = this.state;

    return (
      <div className="App">
        <CartItem 
        count = {this.countTotal()} 
        products = {products}
        increaseQuantity = {this.increaseQuantity}
        decreaseQuantity = {this.decreaseQuantity}
        deleteItem = {this.deleteItem}
        addItem = {this.addItem}
        myChangeHandler = {this.myChangeHandler}
        mySubmitForm = {this.mySubmitForm}
        />   
      </div>
    );
  }
}

export default App;
