import React, {Component} from 'react';
import classes from './App-Jss-Styles';
import CardItem from '../card-Item';

class App extends Component { 
  constructor() {
    super();

    this.state = {
      description: '',
      executor: ['Не выбрано', 'Николай', 'Иван', 'Святослав', 'Михаил', 'Анатолий'],
      priority: 0,
      executorValue: '',
      data: [
        {
          description: 'Описание задачи',
          executor: 'Исполнитель',
          id: 1,
          priority: 10
        },
        {
          description: 'Описание задачи',
          executor: 'Исполнитель',
          id: 2,
          priority: 5
        },
        {
          description: 'Описание задачи',
          executor: 'Исполнитель',
          id: 3,
          priority: null
        },
      ]
    } 
  }
  handlerSubmit = (event) => {
    event.preventDefault();
    let idInc = 0;
    if(this.state.description.trim().length > 10 && this.state.priority !== '' && this.state.executorValue !== '') {
      const item = {
          description: this.state.description,
          executor: this.state.executorValue,
          priority: this.state.priority,
          id: idInc++,
      }
      const array = [item, ...this.state.data];
      this.setState({
          data: array
      })
    }
  }
  handlerChangeInput = (event) => {
    var value = Number(event.target.value);
    if (value >= 0 && value <= 10 ) {
      this.setState({
        priority: value
      }) 
    }
  }
  handlerChangeTextarea = (event) => { 
    var value = event.target.value;
    if(value !== '') {
      this.setState({
        description: event.target.value
      })
    }
  }
  handlerCustomSelect = (event) => {
    this.setState({
      executorValue: event.target.value
    })
  }
  render(){
    return(
      <form className="App" onSubmit={this.handlerSubmit}>
        <h1 className={classes.container}>TODO APP</h1>
        <div className={classes.wrapper}>
          <textarea onChange={this.handlerChangeTextarea}  className={classes.formControl} placeholder="Описание"></textarea>
          <select onChange={this.handlerCustomSelect} className={classes.customSelect}>
            {
              this.state.executor.map(value => {
                return ( 
                  <option key={value}>{value}</option>
                )
              })
            }
          </select>
          <input value={this.state.priority} onChange={this.handlerChangeInput} className={classes.formControlInput} type="text" placeholder="Приоритет"/>
          <button type="submit" className={classes.btnPrimary}>Добавить Задачу</button>
        </div>
        {
          this.state.data.map((item) => {
            return <CardItem 
                      key={item.id}
                      description={item.description}
                      executor={item.executor}
                      id={item.id}
                      priority={item.priority}
                    />
          })
        }
      </form>
    );
  }
}

export default App;
