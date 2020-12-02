import React,{Component} from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css'
//import { robots } from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
//Props never change
// STATE object describe applicaton it is able to change
// STATE >> props
// the parent tell what state is and child recieve it as props


//const state = {
//    robots: robots,
//    searchfield:''
//}

class App extends Component{
    constructor(){
        super()
        this.state = {
                robots: [],
                searchfield:''
        }
    }

componentDidMount(){
   // console.log('check');
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response =>{
     return  response.json();
   })
   .then(users=>{
   // {}
    this.setState({robots: users})
   });
    //this.setState({robots: robots})
}

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
        //console.log(event.target.value);
       /* const filteredrobots= this.state.robots.filter(robots =>
        {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })*/
    }
    render () 
    {
        //const {robots , searchfield} = this.state;
        const filteredrobots= this.state.robots.filter(robot =>
            {
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
            if(this.state.robots.length===0){
                return <h1>Loading</h1>
            }
            else{
                    return(
                    <div className='tc'>
                        <h1 className='f1 '> RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={filteredrobots}/>
                            </ErrorBoundry> 
                        </Scroll>
                    </div>
                        );
                }
    }

        
    
}
/*
const App = () => {
    return (
        <div className='tc'>
        <h1 className='f1 '> RoboFriends</h1>
        <SearchBox />
        <CardList robots={robots}/>
        </div>
    )
}
*/
export default App;