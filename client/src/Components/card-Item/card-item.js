import React, {Component} from 'react';
import classes from './card-item-jss-styles';

class CardItem extends Component {
    constructor(props) {
        super();
    }
    handleDelete = () => {
        this.props.deleteItem(this.props.id)
    } 
    handleRaise = () => {
        this.props.raiseItem(this.props.id)
    } 
    handleLower = () => {
        this.props.lowerItem(this.props.id)
    } 
    render(){ 
        const {description, executor, priority} = this.props;
        return (
            <div className={classes.item}>
                <div>
                    <h3 className={classes.description}>{description}</h3>
                    <p className={classes.executor}>{executor}</p>
                    <p className={classes.priority}>{priority}</p>
                    <div className={classes.buttonAll}>
                        <button className={classes.button} onClick={this.handleDelete}>Удалить</button>
                        { priority === 10 ? null : <button className={classes.button} onClick={this.handleRaise}>Повысить приоритет</button>}
                        { priority === 0 ? null  : <button className={classes.button} onClick={this.handleLower}>Понизить приоритет</button>}
                    </div>
                </div>
            </div>
        )
    }
}
export default CardItem;
