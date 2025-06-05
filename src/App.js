
import React from "react";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
        id: 1,
        title: 'Коврик для ванной',
        img: 'kover.jpg',
        desc: 'Добавляет комфорт и уют в вашу ванную комнату.',
        category: 'Товары для дома',
        price: '1200'
        },
        {
        id: 2,
        title: 'Набор кухонных ножей',
        img: 'knifes.jpeg',
        desc: 'Качественные ножи из нержавеющей стали.',
        category: 'Кухня',
        price: '3500'
        },
        {
        id: 3,
        title: 'Скатерть',
        img: 'skatert.jpeg',
        desc: 'Стильная скатерть, которая украсит ваш стол.',
        category: 'Кухня',
        price: '800'
        },
        {
        id: 4,
        title: 'Утюг с парогенератором',
        img: 'ytug.jpg',
        desc: 'Утюг для быстрой и качественной глажки.',
        category: 'Бытовая техника',
        price: '5500'
        },
        {
        id: 5,
        title: 'Плед',
        img: 'pled.jpeg',
        desc: 'Теплый и уютный плед для холодных вечеров.',
        category: 'Товары для дома',
        price: '1500'
        },
        {
        id: 6,
        title: 'Настенный светильник',
        img: 'svetilnik.jpg',
        desc: 'Светильник для создания уюта в вашем интерьере.',
        category: 'Освещение',
        price: '2500'
        }
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);

  }
  render(){
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
}

export default App;
