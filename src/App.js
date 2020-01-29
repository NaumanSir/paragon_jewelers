import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Browse from "./components/Browse"
import Auction from "./components/Auction"
import Customize from "./components/Customize"
import Sell from "./components/Sell"
import About from "./components/About"
import ProductList from "./ProductList"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jewelry: ProductList
    }
  }
  render() {
    const ProductList = this.state.jewelry.map(product => <Browse key={product.id} product={product}/>)
    return (
      <Router>
        <div>
          {ProductList}
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/browse" component={Browse} />
            <Route path="/auction" component={Auction} />
            <Route path="/customize" component={Customize} />
            <Route path="/sell" component={Sell} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
