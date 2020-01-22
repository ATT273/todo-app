import React, {Component} from 'react';
import Item from './Item';

class List extends Component {
    render () {
        return this.props.items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    delItem={this.props.delItem}
                    completeCheck={this.props.completeCheck}
                />
            ));
    }
}
export default List;