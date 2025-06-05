import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все',
                },
                {
                    key: 'сarpet',
                    name: 'Товары для дома',
                },
                {
                    key: 'knifes and tablecloth',
                    name: 'Кухня',
                },
                {
                    key: 'iron',
                    name: 'Бытовая техника',
                },
                {
                    key: 'blanket',
                    name: 'Товары для дома',
                },
                {
                    key: 'lamp',
                    name: 'Освещение',
                },
            ]
        }
    }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.name)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories