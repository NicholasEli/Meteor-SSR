import React from 'react'
import { Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

class PageTwo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="page-two-component" className="component-container">
        <p>Page Two</p>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default createContainer((params) => {
  return { data: 1 }
}, PageTwo)
