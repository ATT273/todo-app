import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormControlLabel, Checkbox, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import moment from 'moment';

class SimpleAddForm extends Component {

    state = {
        id: null,
        parentId: null,
        title: '',
        description: '',
        type: null,
        dueDate: null,
        children: [],
        isComplete: false
    }

    handleSubmit = (e) => {
        // e.preventDefault();
        this.props.addItem({ ...this.state, id: moment().toISOString() });
        this.setState({ title: '' });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="add-form">
                <div className="d-flex add-form">
                    <div className={'flex-grow-1'}>
                        <TextField
                            id="standard-basic"
                            name="title"
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
            </div>
        );
    }
}
export default withStyles(styles)(SimpleAddForm);