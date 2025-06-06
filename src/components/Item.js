import React, { Component } from 'react'
import '../index.css';

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img className="avatarki" src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} alt="картинки"/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price} руб.</b>
        <div className="add-to-card" onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
    )
  }
}

export default Item