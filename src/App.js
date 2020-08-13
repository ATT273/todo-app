import React, {Component} from 'react';
import Header from './components/Header';
import AddForm from './components/AddForm';
import List from './components/List';
import Footer from './components/Footer';
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
                name: 'add your first task',
                complete: false
            },
        ],
        date:
            {
                day: '',
                wDay: '',
                month: ''
            }
    }
    
    componentDidMount(){
        const today = new Date();
        let day = today.getDate();
        let wDay = today.getDay();
        let month = today.getMonth();
        switch (wDay) {
            case 0:
                wDay = 'Sunday';
                break;
            case 1:
                wDay = 'Monday';
                break;
            case 2:
                wDay = 'Tuesday';
                break;
            case 3:
                wDay = 'Wednesday';
                break;
            case 4:
                wDay = 'Thursday';
                break;
            case 5:
                wDay = 'Friday';
                break;
            case 6:
                wDay = 'Saturday';
                break;
        
            default:
                break;
        }

        switch (month) {
            case 0:
                month = 'Jan';
                break;
            case 1:
                month = 'Feb';
                break;
            case 2:
                month = 'Mar';
                break;
            case 3:
                month = 'Apr';
                break;
            case 4:
                month = 'May';
                break;
            case 5:
                month = 'Jun';
                break;
            case 6:
                month = 'Jul';
                break;
            case 7:
                month = 'Aug';
                break;
            case 8:
                month = 'Sep';
                break;
            case 9:
                month = 'Oct';
                break;
            case 10:
                month = 'Nov';
                break;
            case 11:
                month = 'Dec';
                break;
        
            default:
                break;
        }

        this.setState({
            date:{
                day: day,
                wDay: wDay,
                month: month
            } 
        });

        localStorage.getItem('Todos') && this.setState({
            items: JSON.parse(localStorage.getItem('Todos'))
        });
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
    // check complete 
    completeCheck = async (id) => {
        this.setState ({ item:this.state.items.map (item => {
                if(item.id === id){
                    item.complete = !item.complete
                }
            }) 
        });    
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
                        <Header
                            date={this.state.date}
                        /> 
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
                            completeCheck={this.completeCheck}
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default App;