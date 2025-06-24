
import React from "react";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

import { PRODUCTS_LIST } from "./constants/constants";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: PRODUCTS_LIST,
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);

  }
  

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'Все'){
      this.setState({currentItems: this.state.items})
      return;
    }
    this.setState(prevState => ({
        currentItems: prevState.items.filter(el => el.category === category)
    }))
}

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true;
    })

    if(!isInArray) {
      this.setState({orders: [...this.state.orders, item]});
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }
}

export default App;
