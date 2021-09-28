import React, { Component } from 'react';
import Header from './components/Header';
import SimpleAddForm from './components/SimpleAddForm';
import List from './components/List';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './my_style.scss';

library.add(fas);
const moment = require('moment')

class App extends Component {

    state = {
        items: [
            {
                id: 1,
                title: 'add your first task',
                isComplete: false,
                parentId: null,
                children: [
                    {
                        id: 1,
                        title: 'add your first task',
                        complete: true,
                        parentId: 1,
                    },
                    {
                        id: 2,
                        title: 'add your sec task',
                        complete: false,
                        parentId: 1,
                    },
                ]
            },
            {
                id: 2,
                title: 'add your first task',
                isComplete: false,
                parentId: null,
                children: []
            },
        ],
        date:
        {
            day: '',
            wDay: '',
        }
    }

    componentDidMount() {
        const today = new Date();
        let wDay = moment(today).format("[Today is ] dddd")
        let day = moment(today).format("MMM - D")

        this.setState({
            date: {
                wDay,
                day
            }
        });

        // localStorage.getItem('Todos') && this.setState({
        //     items: JSON.parse(localStorage.getItem('Todos'))
        // });
    }
    // add item to list
    addItem = async (data) => {
        const newItem = {
            ...data,
        }
        console.log(`data`, data)
        await this.setState({ items: [newItem, ...this.state.items] });
        await localStorage.setItem('Todos', JSON.stringify(this.state.items));
    }
    addChild = () => {
        console.log('add chiild')
    }
    // check complete 
    completeCheck = async (id) => {
        this.setState({
            item: this.state.items.map(item => {
                if (item.id === id) {
                    item.complete = !item.complete
                }
            })
        });
        await localStorage.setItem('Todos', JSON.stringify(this.state.items));
    }
    // delete item from list
    delItem = async (id) => {
        let items = this.state.items.filter(item => item.id !== id);
        await this.setState({ items: items });
        await localStorage.setItem('Todos', JSON.stringify(this.state.items));
    }

    render() {
        const { date, items } = this.state
        return (
            <div className="App">
                <div className="row">
                    <div className="col-md-12">
                        <Header
                            date={date}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <SimpleAddForm
                            addItem={this.addItem}
                        />
                        {/* {JSON.stringify(this.state.items)} */}
                    </div>
                </div>
                <div className="row todo-list">
                    <div className="col-md-12">
                        <List
                            items={items}
                            delItem={this.delItem}
                            addChild={this.addChild}
                            completeCheck={this.completeCheck}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default App;