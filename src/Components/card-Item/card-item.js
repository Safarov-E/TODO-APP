import React, {Component} from 'react';
import classes from './card-item-jss-styles';

class CardItem extends Component {
    constructor(props) {
        super();
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
                        <button className={classes.button}>Удалить</button>
                        <button className={classes.button}>Повысить приоритет</button>
                        <button className={classes.button}>Понизить приоритет</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardItem;