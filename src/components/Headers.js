import { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const Orders = ({ orders, onDelete }) => {
  const summa = orders.reduce((prev, elem) => prev + Number.parseFloat(elem.price), 0);

  return (
    <div>
      {orders.map(el => (
        <Order onDelete={onDelete} key={el.id} item={el}/>
      ))}
      <p className='summa'>Сумма {summa} руб.</p>
    </div>
  )
}

const Empty = () => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  )
}

const Header = ({ orders, onDelete }) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
          {cartOpen && (
            <div className="shop-cart">
              {orders.length ? <Orders orders={orders} onDelete={onDelete} /> : <Empty />}
            </div>
          )}
      </div>
      <div className="presentation" />
    </header>
  )
}

export default Header