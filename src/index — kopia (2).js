import 'antd/dist/antd.css'
import './styles.css'
import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import lodash from 'lodash'
import { Icon } from 'antd'
import data from './data'
import Header from './Header'
import { Grid, Slug, Fade } from 'mauerwerk'
import { BrowserRouter, Match, Miss } from 'react-router';

const Cell = ({ toggle, href, name, thumbnail, height, description, css, maximized }) => (
  <a href={href}  >  
    <div
      className="cell"
      style={{ backgroundImage: css, cursor: !maximized ? 'pointer' : 'auto' }}
      // onClick={!maximized ? toggle : undefined}
      >
      <Fade show={maximized} delay={maximized ? 400 : 0}>
        <div className="details">
          <Slug delay={600}>
            <div className="circle" style={{ background: css }} />
            <div className="close">
              <Icon type="close" style={{ cursor: 'pointer' }} onClick={toggle} />
            </div>
            <h1>{name}</h1>
            <p>{description}</p>
          </Slug>
        </div>
      </Fade>

      <Fade
        show={!maximized}
        from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
        enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
        leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
        delay={maximized ? 0 : 400}>
         
          <div className="default"> {name} </div>
         <img className="thumbnail" src={thumbnail} />
        
      </Fade>
    </div>
  </a>
)

class App extends Component {
  state = { data, columns: 5, margin: 40, filter: '', height: true }
  search = e => this.setState({ filter: e.target.value })
  shuffle = () => this.setState(state => ({ data: lodash.shuffle(state.data) }))
  
  paintings = () => this.setState(state => ({ data: lodash.filter(state.data, { 'category': 'paintings' }) }))  
  animals = () => this.setState(state => ({ data: lodash.filter(state.data, { 'category': 'animals' }) }))  

  setColumns = e => this.setState({ columns: parseInt(e.key) })
  setMargin = e => this.setState({ margin: parseInt(e.key) })

  render() {
    const data = this.state.data.filter(
      d => d.name.toLowerCase().indexOf(this.state.filter) != -1
    )
    return (
      <div className="main">
        <Header
          {...this.state}
          search={this.search}
          shuffle={this.shuffle}
          paintings={this.paintings}
          animals={this.animals}
          setColumns={this.setColumns}
          setMargin={this.setMargin}
        />
        <Grid
          className="grid"
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={data}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={d => d.name}
          // Can be a fixed value or an individual data accessor
          heights={this.state.height ? d => d.height : 200}
          //heights={d => d.height} 
          // Number of columns
          columns={this.state.columns}
          // Space between elements
          margin={this.state.margin}
          // Removes the possibility to scroll away from a maximized element
          lockScroll={false}
          // Delay when active elements (blown up) are minimized again
          closeDelay={400}>
          {(data, maximized, toggle) => (
            <Cell {...data} maximized={maximized} toggle={toggle} />
          )}
        </Grid>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
