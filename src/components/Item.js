import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Item extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.item.complete ? 'line-through' : 'none'
        }
    }
    render () {
        const {id, name} = this.props.item;
        const isComplete = this.props.item.complete;
        return (
            <div className="todo-item" style={this.getStyle()}>
                {isComplete ? (
                    <input 
                        type="checkbox" 
                        onChange={this.props.completeCheck.bind(this,id)} 
                        className="" 
                        checked
                    />
                ) : (
                    <input 
                        type="checkbox" 
                        onChange={this.props.completeCheck.bind(this,id)} 
                        className=""
                    />
                )}
                    <p>{name}</p>
                <button className="btn-delete" onClick={this.props.delItem.bind(this,id)}>
                    <FontAwesomeIcon icon={['fas', 'trash']} />
                </button>
            </div>
        );
    }
}
export default Item;