import React, {Component}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddForm extends Component {

    state = {
        item_name: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.item_name);
        this.setState({item_name: ''});
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group add-form">
                    <input 
                        type="text" 
                        name="item_name" 
                        value={this.state.item_name}
                        onChange={this.handleChange}
                        className="form-control" 
                        placeholder="Add new task ..." 
                    />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-success">
                            <FontAwesomeIcon icon={['fas', 'plus']} />
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
export default AddForm;