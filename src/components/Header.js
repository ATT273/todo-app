import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="app-header">
                <h1>My ToDo List</h1>
                <div className="under-line"></div>
                <h3>{this.props.date.wDay}</h3>
                <div className="day-n-month">
                    {this.props.date.month} - {''}
                    {this.props.date.day}
                </div>
            </div>
        );
    }
}
export default Header;