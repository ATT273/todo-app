import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Item extends Component {
    
    render () {
        const {id, name} = this.props.item;
        return (
            <div className="todo-item">
                <input type="checkbox"className="" />{' '}{name}
                <button className="btn btn-danger float-right" onClick={this.props.delItem.bind(this,id)}>
                    <FontAwesomeIcon icon={['fas', 'trash']} />
                </button>
            </div>
        );
    }
}
export default Item;