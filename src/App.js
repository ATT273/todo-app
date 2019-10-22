import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AddForm from './components/AddForm';
import List from './components/List';
import {library} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './my_style.scss';

library.add(fas);

class App extends Component {

    state = {
        items:[
            {
                id: 1,
                name: 'hoc React',
                complete: true
            },
            {
                id: 2,
                name: 'lam project',
                complete: true
            },
            {
                id: 3,
                name: 'hoc Tieng Nga',
                complete: false
            }
        ]
    }
    // mount data from local storage ton component
    componentWillMount() {
        localStorage.getItem('Todos') && this.setState({
            items: JSON.parse(localStorage.getItem('Todos'))
        })
    }
    // add item to list
    addItem = async (name) => {
        
        // create id for item
        let stateLenght = this.state.items.length;
        let itemID = stateLenght + 1;

        const newItem = {
            id: itemID,
            name,
            complete: false
        }
        await this.setState({items: [newItem, ...this.state.items] });
        await localStorage.setItem('Todos', JSON.stringify(this.state.items));
    }
    // delete item from list
    delItem = async (id) => {
        let items = this.state.items.filter(item => item.id !== id);
        await this.setState({ items: items});
        await localStorage.setItem('Todos', JSON.stringify(this.state.items));
    }
    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-md-12">
                        <Header/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <AddForm
                            addItem={this.addItem}
                        />
                        {/* {JSON.stringify(this.state.items)} */}
                    </div>
                </div>
                <div className="row todo-list">
                    <div className="col-md-12">
                        <List
                            items={this.state.items}
                            delItem={this.delItem}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {/* <Footer/> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default App;