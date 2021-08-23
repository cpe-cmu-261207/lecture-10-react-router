import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Tasks from './components/Tasks'

function App() {

  useEffect(()=>{
    console.log('navbar is rendered')
  }, [])

  return (
    <Router>
      <div>
        <div className='flex justify-center space-x-3 bg-pink-300'>
          <p>
            <Link to='/'>Home</Link>
          </p>
          <p>
            <Link to='/users'>Users</Link>
          </p>
          <p>
            <Link to='/about'>About</Link>
          </p>
          <p>
            <Link to='/tasks'>Tasks</Link>
          </p>
        </div>
        <Switch>
          <Route path='/' exact>
            <p>Home page</p>
          </Route>
          <Route path='/users'>
            <p>Users page</p>
          </Route>
          <Route path='/about'>
            <p>About me page</p>
          </Route>
          <Route path='/tasks'>
            <Tasks/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
