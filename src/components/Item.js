import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormControlLabel, Checkbox, Button, Icon } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import AddForm from './AddForm'
import styles from './styles'

const CustomCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props}/>);
class Item extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showChildren: false,
        }
    }
    getStyle = () => {
        return {
            textDecoration: this.props.item.complete ? 'line-through' : 'none'
        }
    }

    addItem = () => {
        console.log('add item')
    }

    showChildren = () => {
        this.setState({
            showChildren: !this.state.showChildren
        })
    }

    render () {
        const { showChildren } = this.state
        const { classes, item } = this.props
        const { id, name, complete, parentId, children } = this.props.item;

        return (
            <div>
                <div className="todo-item" style={this.getStyle()}>
                    <FormControlLabel
                        className={classes.formControlCheckBox}
                        control={
                            <CustomCheckbox
                                checked={complete}
                                onChange={this.props.completeCheck.bind(this, id)} />
                        }
                        label={name}
                    />
                    {
                        parentId === null &&
                        <div onClick={this.showChildren} className='arrow-drop-down'>
                            <ArrowDropDownIcon />
                        </div>
                    }
                    
                    <Button
                        onClick={this.props.delItem.bind(this, id)}
                        variant='contained'
                        className={`${classes.delBtn} btn-delete`}
                    >
                        <FontAwesomeIcon icon={['fas', 'trash']} color={'#fff'} className={'btn-delete'} />
                    </Button>

                </div>
                <div style={{ paddingLeft: '25px' }}>
                    {
                        showChildren &&
                        <div>
                            {
                                parentId === null &&
                                <div className='todo-item d-flex'>
                                    <AddForm
                                        addItem={this.addItem}
                                    />
                                </div>
                            }
                            {
                                this.props.children
                            }
                        </div>
                    }
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(Item);