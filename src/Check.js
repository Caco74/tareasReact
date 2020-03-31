import React, { Component } from 'react'

export default class Check extends Component {
  render() {
    return (
      <div className="col-1" onClick={this.check}><a href="/#" className="text-dark"><i className="fa fa-check fa-lg float-right"></i></a></div>
    )
  }
}
