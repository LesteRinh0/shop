import { Component } from 'react'
import { CATEGORIES_LIST } from '../constants/constants';

export class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: CATEGORIES_LIST
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