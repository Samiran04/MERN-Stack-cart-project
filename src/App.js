import './App.css';
import React from 'react';
import CartItem from './CartItem';

class App extends React.Component {

  constructor(){
      super();

      this.state = {
          products: [
              
          ],
          test_message: {}
      }
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

    let items = products.filter((product) => product.id !== key);

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
        />   
      </div>
    );
  }
}

export default App;
