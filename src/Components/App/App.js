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
          priority: 0
        },
      ]
    } 
  }
  getId() {
    this._id = !this._id ? 4 : this._id += 1;
    return this._id;
  } 
  handleSubmit = (event) => {
    event.preventDefault();
    const isDescription = this.state.description.trim().length > 10;
    const isPriority = this.state.priority !== '';
    const isExecutorValue = this.state.executorValue !== '';

    const textArea = event.target.querySelector(`.${classes.formControl}`);
    if(!isDescription) textArea.classList.add(classes.error); 

    const selectError = event.target.querySelector(`.${classes.customSelect}`);
    if(!isExecutorValue) selectError.classList.add(classes.error);

    if(isDescription && isPriority && isExecutorValue) {
      const item = {
        description: this.state.description,
        executor: this.state.executorValue,
        priority: this.state.priority,
        id: this.getId(),
      }
      const array = [item, ...this.state.data]; 
      this.setState({
          data: array,
          description: '',
          executor: ['Не выбрано', 'Николай', 'Иван', 'Святослав', 'Михаил', 'Анатолий'],
          priority: 0,
          executorValue: '',
      })
      textArea.classList.remove(classes.error);
      selectError.classList.remove(classes.error);
    }
  }
  handleChangeInput = (event) => {
    var value = Number(event.target.value);
    if (value >= 0 && value <= 10 ) {
      this.setState({
        priority: value
      }) 
    }
  }
  handleChangeTextarea = (event) => { 
    var value = event.target.value;
    if(value !== '') {
      this.setState({
        description: event.target.value
      }) 
    }  
  }
  handleCustomSelect = (event) => {
    this.setState({
      executorValue: event.target.value
    })
  }
  handleDelete = (id) => {
    const data = this.state.data.filter(item => {
      return item.id !== id;
    })
    this.setState({
      data: data
    })
  }
  handleRaise = (id) => {
    const data = this.state.data.map(item => {
      if(item.id === id) {
        item.priority += 1
      }
      return item 
    })
    this.setState({
      data: data
    })
  }
  handleLower = (id) => {
    const data = this.state.data.map(item => {
      if(item.id === id) {
        item.priority -= 1
      }
      return item 
    })
    this.setState({
      data: data
    })
  }
  render(){
    return(
      <React.Fragment>
      <form className="App" onSubmit={this.handleSubmit}>
        <h1 className={classes.container}>TODO APP</h1>
        <div className={classes.wrapper}>
          <textarea onChange={this.handleChangeTextarea}  className={classes.formControl} placeholder="Описание" value={this.state.description}></textarea>
          <select onChange={this.handleCustomSelect} className={classes.customSelect}>
            {
              this.state.executor.map(value => {
                return ( 
                  <option key={value}>{value}</option>
                )
              })
            }
          </select>
          <input value={this.state.priority} onChange={this.handleChangeInput} className={classes.formControlInput} type="text" placeholder="Приоритет"/>
          <button type="submit" className={classes.btnPrimary}>Добавить Задачу</button>
        </div>
      </form> 
        {
          this.obj = [...this.state.data],
          this.obj.sort((a,b) => b.priority - a.priority),
          
          this.obj.map((item) => {
            return <CardItem 
                      key={item.id}
                      description={item.description}
                      executor={item.executor}
                      id={item.id}
                      deleteItem={this.handleDelete}
                      raiseItem={this.handleRaise}
                      lowerItem={this.handleLower}
                      priority={item.priority}
                    />
          })
        }
      </React.Fragment>
    );
  }
}

export default App;
