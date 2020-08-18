import React, {Component} from 'react';

class Header extends Component {
    render() {
        const { date } = this.props
        return (
            <div className="app-header">
                <h1>My ToDo List</h1>
                <div className="under-line"></div>
                <div className='mb-3 weekDayTxt'>
                    <h3>{date.wDay}</h3>
                </div>
                <div className="day-n-month">
                    {date.day}
                </div>
            </div>
        );
    }
}
export default Header;