import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
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
    getStyle = () => {
        return {
            textDecoration: this.props.item.complete ? 'line-through' : 'none'
        }
    }
    render () {
        const { classes } = this.props
        const { id, name, complete, parentId } = this.props.item;
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
                        <Button
                        onClick={this.props.addChild.bind(this, id)}
                        variant='contained'
                        className={classes.addBtn}
                    >
                        <FontAwesomeIcon icon={['fas', 'plus']} color={'#fff'} />
                    </Button>
                    }
                    <Button
                        onClick={this.props.delItem.bind(this, id)}
                        variant='contained'
                        className={`${classes.delBtn} btn-delete`}
                    >
                        <FontAwesomeIcon icon={['fas', 'trash']} color={'#fff'} className={'btn-delete'} />
                    </Button>

                </div>
                <div style={{paddingLeft: '25px'}}>
                    {
                        this.props.children
                    }
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(Item);