import React, {
  PureComponent
} from 'react';
import classes from './App-Jss-Styles';
import CardItem from '../card-Item';
import require from '../../lib/api';

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      description: '',
      executor: ['Не выбрано', 'Николай', 'Иван', 'Святослав', 'Михаил', 'Анатолий'],
      priority: 0,
      executorValue: '',
      data: [],
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const isDescription = this.state.description.trim().length > 10;
    const isPriority = this.state.priority !== '';
    const isExecutorValue = this.state.executorValue !== '';

    const textArea = event.target.querySelector(`.${classes.formControl}`);
    if (!isDescription) textArea.classList.add(classes.error);

    const selectError = event.target.querySelector(`.${classes.customSelect}`);
    if (!isExecutorValue) selectError.classList.add(classes.error);

    if (isDescription && isPriority && isExecutorValue) {
      const item = {
        description: this.state.description,
        executor: this.state.executorValue,
        priority: this.state.priority,
      }
      this.setTask(item).then((response) => {
        if (response && response.result === 1) {
          this.setState({
            description: '',
            executor: ['Не выбрано', 'Николай', 'Иван', 'Святослав', 'Михаил', 'Анатолий'],
            priority: 0,
            executorValue: '',
          })
        }
      })
      textArea.classList.remove(classes.error);
      selectError.classList.remove(classes.error);
    }
  }
  setTask = (item) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        console.log(JSON.stringify(item));
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      }
      xhr.open('POST', '/tasks');
      xhr.setRequestHeader("Content-Type", "application/JSON");
      xhr.send(JSON.stringify(item));
    });
  }
  handleChangeInput = (event) => {
    var value = Number(event.target.value);
    if (value >= 0 && value <= 10) {
      this.setState({
        priority: value
      })
    }
  }
  handleChangeTextarea = (event) => {
    var value = event.target.value;
    if (value !== '') {
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
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'tasks/delete');
      xhr.setRequestHeader("Content-Type", "application/JSON");
      xhr.send(JSON.stringify({ id: id}));
  }
  handleRaise = (id) => {
    const xhr = new XMLHttpRequest();
      xhr.open('POST', 'tasks/raise');
      xhr.setRequestHeader("Content-Type", "application/JSON");
      xhr.send(JSON.stringify({ id: id}));
  }
  handleLower = (id) => {
    const xhr = new XMLHttpRequest();
      xhr.open('POST', 'tasks/lower');
      xhr.setRequestHeader("Content-Type", "application/JSON");
      xhr.send(JSON.stringify({ id: id}));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data != this.state.data) {
      require('GET', '/tasks').then((response) => {
        this.setState({
          data: response,
        });
      });
    }
  }
  componentDidMount() {
    require('GET', '/tasks').then((response) => {
      this.setState({
        data: response
      });
    });
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