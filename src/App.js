import './App.css';
import { Component } from 'react'
import CardList from './components/card-list/Card-list';
import SearchBox from './components/Search-box/SearchBox';

class App extends Component {

  constructor() {
    // console.log('constructor')
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }



    
    componentDidMount() {
      // console.log('component did mount')
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>this.setState(()=>{
        return {monsters:data}
      }))
    }

    onSearchChange = (event)=>{
      const searchField = event.target.value.toLocaleLowerCase()
      this.setState(()=>{
        return {searchField}
      })
    }

      

    render () {

      console.log('rendered')

      const { monsters, searchField} = this.state;
      const { onSearchChange } = this;

      const newMonsters = monsters.filter((item)=>{
        return item.name.toLocaleLowerCase().includes(searchField)
      })
      return (
        <div className="App">
        <h2 className='app-title'>Monsters Rolodex</h2>
          
          <SearchBox  search={onSearchChange} placeholder={'search monsters'}/>
       
          <CardList monsters={newMonsters}/> 

        </div>
      );
    }
    
    }

export default App;
