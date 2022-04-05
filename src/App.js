import React from 'react';
import Nav from './Nav';
import About from './About';
import Story from './Story';
import Video from './Video';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <body>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/story" component={Story} />
            <Route path="/video" component={Video} />
          </Switch>
        </div>
      </body >
    </Router>

  )
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App;
