import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(elem => 
        <Item onShowItem={this.props.onShowItem} key={elem.id} item={elem} onAdd={this.props.onAdd}/>
      )}
      </main>
    )
  }
}

export default Items