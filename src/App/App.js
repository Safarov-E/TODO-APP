import React, {Component} from 'react';
import useStyles from './App-Jss-Styles';

const App = () => {
  const classes = useStyles();
    return(
      <div className="App">
        <h1 className={classes.container}>TODO APP</h1>
        <div className={classes.wrapper}>
          <textarea className={classes.formControl} placeholder="Описание"></textarea>
          <select className={classes.customSelect}>
            <option>Не выбрано</option>
          </select>
          <input className={classes.formControlInput} type="text" placeholder="Приоритет"/>
          <button type="button" className={classes.btnPrimary}>Добавить Задачу</button>
        </div>
      </div>
    )
}

export default App;
