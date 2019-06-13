import 'antd/dist/antd.css'
import './styles.css'
import React from 'react'
import { render } from 'react-dom'
 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './components/Main';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>

      {/*
        <Match exactly pattern="/" component={Main} />
        <Match exactly pattern="/contact" component={Contact} />
        <Match pattern="/works/" component={Works} />
      */}
         
        <Switch>
          <Route component={Main} />
          {/*<Route component={NotFound} />*/}
        </Switch>
      
    </Router>
  )
}

render(<App />, document.getElementById('root'))
