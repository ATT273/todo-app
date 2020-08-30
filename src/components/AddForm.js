import React, {Component}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormControlLabel, Checkbox, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

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
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className="add-form">
                <div className="d-flex add-form">
                    <div className={'flex-grow-1'}>
                    <TextField
                        id="standard-basic"
                        name="item_name"
                        placeholder="Add new task ..."
                        fullWidth={true}
                        variant={'outlined'}
                        onChange={this.handleChange} />
                    </div>
                    <div className="ml-2">
                        <Button
                            onClick={this.handleSubmit}
                            variant='contained'
                            className={classes.addBtn}
                            >
                            <FontAwesomeIcon icon={['fas', 'plus']} color={'white'} />
                        </Button>
                    </div>
                </div>
            </form>
        );
    }
}
export default withStyles(styles)(AddForm);