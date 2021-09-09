import React, {useState,useEffect}from 'react';
import CardList from './CardList';
import SearchBox from'./SearchBox';
import Scroll from './Scroll';
import './App.css';



function App () {
 
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfiled] = useState('');

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(users => setRobots(users),[])

    })

   const onSearchChange = (event) => {
        setSearchfiled(event.target.value)
    
    }
    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if(robots.length === 0){
      return <h1>Loading...</h1>
    }else{
      return(
         <div className='tc'>
            <h1 className='f1'>Robot Friends</h1>
              <SearchBox searchChange={onSearchChange}/>
              <Scroll>
                <CardList robots={filteredRobots}/>
              </Scroll>
        </div>
            );
        }
    }
export default App;