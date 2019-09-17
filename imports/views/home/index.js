import React from 'react'
import { Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: '',
      dataList: null
    }
  }

  updateData(event) {
    this.setState({ data: event.currentTarget.value })
  }

  addData() {
    if (this.state.data === '') {
      return
    }
    Meteor.call('addData', this.state.data, (err, res) => {
      if (err) {
        console.log(err)
        return
      }

      this.setState({ data: '', dataList: res })
    })
  }

  componentDidMount() {
    this.setState({ dataList: this.props.data })
  }

  render() {
    return (
      <div id="home-component" className="component-container">
        <p>Home</p>
        <br />
        <br />
        <input
          onChange={(event) => this.updateData(event)}
          value={this.state.data}
        />
        <br />
        <br />
        <a onClick={() => this.addData()}>Add Data</a>
        <br />
        <br />
        {Meteor.isClient && this.state.dataList && (
          <div>
            {this.state.dataList.map((key, index) => (
              <p key={index}>{key.text}</p>
            ))}
          </div>
        )}
        <br />
        <br />
        <Link to="/page-two">Page Two</Link>
      </div>
    )
  }
}

export default createContainer((params) => {
  return { data: params.data }
}, Home)
