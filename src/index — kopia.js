import 'antd/dist/antd.css'
import './styles.css'
import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import lodash from 'lodash'
import { Icon } from 'antd'
import data from './data'
import Header from './Header'
import { Grid, Slug, Fade } from 'mauerwerk'

import Main from './components/Main';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div> 
      
      {/*
        <Match exactly pattern="/" component={Main} />
        <Match exactly pattern="/contact" component={Contact} />
        <Match pattern="/works/" component={Works} />
      */}
         
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
      
      </div>
    </Router>
  )
}

render(<App />, document.getElementById('root'))
