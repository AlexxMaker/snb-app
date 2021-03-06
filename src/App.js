var React = require('react');
import './App.css';

var App = React.createClass({
  getInitialState: function () {
    return {
      weight: '',
      height: '',
      gender: 'Male',
      paramError: '',
      bodyIndex: 'N'
    };
  },

  handleUserInputWeight: function (e) {
    this.setState({
      weight: e.target.value
    });
  },

  handleUserInputHeight: function (e) {
    this.setState({
      height: e.target.value
    });
  },

  handleUserGender: function (e) {
    this.setState({
      gender: e.target.value
    });
  },

  parameterError: function () {
    this.setState({
      paramError: "Please, enter all parameters"
    });
  },

  noError: function () {
    this.setState({
      paramError: ''
    });
  },

  parameterCheck: function () {
    if ((this.state.weight <= 0 || this.state.height <= 0)) {
      this.parameterError();
      return false;
    } else if (this.state.weight > 0 && this.state.height > 0) {
      this.noError();
      return true;
    };
  },

  bodyMassIndex: function () {
    let bodyIndexCalc = this.state.weight/Math.pow(((this.state.height)/100), 2);
    console.log(bodyIndexCalc);

    if (bodyIndexCalc > 24.99) {
      this.setState({
        bodyIndex: 'F'
      });
    } else {
      this.setState({
        bodyIndex: 'N'
      });
    };
  },

  snowboardLengthCalculation: function () {
    this.bodyMassIndex();

   if (!this.parameterCheck()) return;

   if (this.state.gender === "Male") {
      let snowboardLength = Math.floor((this.state.weight * 0.3) + 136);
      console.log("Your optimal snowboard length is " + snowboardLength + "cm");
    } else if (this.state.gender === "Female") {
      let snowboardLength = Math.floor((this.state.weight * 0.4) + 127);
      console.log("Your optimal snowboard length is " + snowboardLength + "cm");
    };

    if (this.state.bodyIndex === 'F') {
      let snowboardLength = snowboardLength + 2;
      console.log('Snb length including IMT is: ' + snowboardLength);
    }
  },

  render: function () {
    return (
      <div className="App container">

        <div className="container">
          <input className='input' type="text" onChange={this.handleUserInputWeight} placeholder="Enter your weight" /><br />
          <input className='input' type="text" onChange={this.handleUserInputHeight} placeholder="Enter your height" />
          <br />
          <br />

          <select className="genderSelect" onChange={this.handleUserGender} value={this.state.value}>
            <option value="Male" defaultValue="selected">Male</option>
            <option value="Female">Female</option>
          </select>

          <h1>Weight is: {this.state.weight}cm</h1>
          <h1>Height is: {this.state.height}cm</h1>
          <h1>Gender is: {this.state.gender}</h1>
          <h1>BodyIndex is: {this.state.bodyIndex}</h1>
          <h1>{this.state.paramError}</h1>

          <button className="btn-calc" onClick={this.snowboardLengthCalculation}>Calculate</button>
        </div>


      </div>
    );
  }
})

module.exports = App;
