import React, {Component} from 'react';
import Header from './components/Header';
import AddForm from './components/AddForm';
import List from './components/List';
import Footer from './components/Footer';
import {library} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import firebase from './config/fbConfig';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './my_style.scss';

library.add(fas);
const moment = require('moment')

class App extends Component {

    state = {
        items:[
            {
                id: 1,
                name: 'add your first task',
                complete: false,
                parentId: null,
                children: [
                    {
                        id: 1,
                        name: 'add your first task',
                        complete: true,
                        parentId: 1,
                    },
                    {
                        id: 2,
                        name: 'add your sec task',
                        complete: false,
                        parentId: 1,
                    },
                ]
            },
            {
                id: 2,
                name: 'add your first task',
                complete: false,
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
    
    componentDidMount(){
        const today = new Date();
        let wDay = moment(today).format("[Today is ] dddd")
        let day = moment(today).format("MMM - D")

        this.setState({
            date:{
               wDay,
                day
            } 
        });

        this.getFirebaseData()
        // localStorage.getItem('Todos') && this.setState({
        //     items: JSON.parse(localStorage.getItem('Todos'))
        // });
    }

    getFirebaseData = async () => {
        const db = firebase.firestore()
        const data = await db.collection('todos')

        data.get()
            .then(querySnapshot  => {
                let items  = []
                querySnapshot.forEach(doc => {
                    console.log(doc.id , doc.data())
                    items.push(doc.data())
                })
                // if(doc.exists) {
                //     console.log('doc', doc.data())
                // } else {
                //     console.log('not existed')
                // }
                this.setState({
                    items
                })
                
            })
            .catch(err => {
                console.log('eerr', err)
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
    addChild = () => {
        console.log('add chiild')
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
                        <AddForm
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
                <Footer/>
            </div>
        );
    }
}
export default App;