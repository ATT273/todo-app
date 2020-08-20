import React, {Component} from 'react';
import Item from './Item';

class List extends Component {
    render () {
        const { items } = this.props
        return items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    delItem={this.props.delItem}
                    addChild={this.props.addChild}
                    completeCheck={this.props.completeCheck}
                >
                    {
                        item.children.map(child => (
                            <Item
                                key={child.id}
                                item={child}
                                delItem={this.props.delItem}
                                addChild={this.props.addChild}
                                completeCheck={this.props.completeCheck}
                            />
                        ))
                    }
                </Item>
            ));
    }
}
export default List;