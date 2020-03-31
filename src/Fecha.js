import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Fecha extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendChange = this.sendChange.bind(this);
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
    console.log(date.toLocaleDateString())
    console.log(this.props.id)
  };

  sendChange = (e) => {
    console.log(e);
    console.log('dsfsadf');
  }

  render() {
    const { sendChange } = this.props
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        id={this.props.id}
        onClick={sendChange}
      />
    );
  }
}

export default Fecha;
