import axios from "axios";
import React, { Component } from "react";

class AddMember extends Component {
  state = {
    name: "",
    users: [],
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handlefetchmembers = () => {
    axios.get("http://localhost:8000/api/member/").then((res) => {
      this.setState({
        users: res.data,
      });
    });
  };
  handleFormSubmit = () => {
    const name = this.state.name;
    axios
      .post("http://localhost:8000/api/member/", {
        name: name,
      })
      .then((error) => console.log(error), this.handlefetchmembers());
  };
  componentDidMount() {
    this.handlefetchmembers();
  }
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <input
            className="name_input"
            id="name"
            autoComplete="off"
            name="name"
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={this.handleFormSubmit}>add user</button>
        </div>
        <ul>
          {this.state.users.length !== 0 ? (
            this.state.users.map((u) => {
              return <li>{u.name}</li>;
            })
          ) : (
            <></>
          )}
        </ul>
      </div>
    );
  }
}
export default AddMember;
