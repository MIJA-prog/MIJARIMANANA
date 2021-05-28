import React, { Fragment } from "react"
import "./index.css"

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"
import voiture_img from './images/imagen0.jpg'
import List from './List'
import Comments from './Comments'


export default function App() {
  const name = " Voiture de Christian"
  const title = "Test React/NodeJSX"
  //const isAuthenticated = false
  const isAuthenticated = true
  return (
    <Router>
      <main>
        <h1>{title}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/about/${name}`}>About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
            {isAuthenticated ? (
              <>
                <Route path="/about/:name" component={About} />
                <Route path="/contact" component={Contact} />
              </>
            ) : (
              <Redirect to="/" />
          )}
        </Switch>
        
      </main>
    </Router>
  )
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <p>
      <List></List>
    </p>
    <img  src={voiture_img} alt="voiture"/>
    <img  src={voiture_img} alt="voiture"/>
  
  </Fragment>
)
/*
const About = () => (
  <Fragment>
    <h1>About</h1>
    <FakeText />
  </Fragment>
)
*/
const About = ({
  match: {
    params: { name },
  },
}) => (
  // props.match.params.name
  <Fragment>
    <h1>About {name}</h1>
    <FakeText /> 
  </Fragment>
)

const Contact = () => (
  <Fragment>
    <h1>Contact</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p> 
    <a
        className="App-link"
          href="https://github.com/MIJA-prog/TestNodeJS/commits?author=MIJA-prog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Goto git repository
    </a>
    
  </Fragment>
)
const FakeText = () => (
  <Fragment> 
    <img  src={voiture_img} alt="voiture"/>
   
    <div>
      <Comments>

      </Comments>
    </div>

  </Fragment>

  
)

