import axios from "axios";
import React, { Component } from "react";

class AddMember extends Component {
  state = {
    name: "",
    users: [],
    room: [],
    winner: [],
    gift: 0,
    loading: true,
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handlefetchmembers = () => {
    const room = this.props.match.params.roomID;
    axios
      .get(`https://fclobby2.herokuapp.com/api/lobby/?room=${room}`)
      .then((res) => {
        this.setState({
          users: res.data.members,
        });
      });
  };
  handleFormSubmit = () => {
    const name = this.state.name;
    const room = this.props.match.params.roomID;
    axios
      .post("https://fclobby2.herokuapp.com/api/member/", {
        name: name,
        room: room,
      })
      .then((error) => console.log(error), this.handlefetchmembers());
  };
  fetchRoom = () => {
    const roomID = this.props.match.params.roomID;
    axios
      .get(`https://fclobby2.herokuapp.com/api/room/${roomID}`)
      .then((res) => {
        this.setState({
          room: res.data,
          loading: false,
        });
      });
  };
  fetchWinner = () => {
    const roomID = this.props.match.params.roomID;
    axios
      .get(`https://fclobby2.herokuapp.com/api/winner/?room=${roomID}`)
      .then((res) => {
        this.setState({
          winner: res.data.winner,
          gift: res.data.gift,
          users: [],
        });
      });
  };
  handlefetches = () => {
    this.handlefetchmembers();
    this.fetchRoom();
  };
  componentDidMount() {
    this.handlefetches();
  }
  componentWillUnmount() {
    this.setState({
      loading: true,
    });
  }
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          {this.state.room.length !== 0 ? (
            <>
              <h1 className="room_name_css">{this.state.room.room_name}</h1>
              <span>Users Required: {this.state.room.total_people}</span>
              <br />
              <span>Users Present: {this.state.users.length}</span>
            </>
          ) : (
            <></>
          )}
        </div>
        {this.state.gift !== 0 ? (
          <div className="mdl-cell mdl-cell--12-col">
            🥳🎉🎉 Congratulations{" "}
            <span className="name_user">{this.state.winner.name}</span> On
            winning <span className="gift_recived">{this.state.gift}</span> in
            the lobby 🥳🎉🎉
          </div>
        ) : (
          <></>
        )}
        <div>
          {" "}
          {this.state.room.length !== 0 &&
          this.state.room.total_people === this.state.users.length ? (
            <div className="start_butoon">
              <button
                onClick={this.fetchWinner}
                className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
              >
                Start Game
              </button>
            </div>
          ) : (
            <div className="start_butoon" id="tt3">
              <button
                className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                disabled
              >
                Start Game
              </button>
              <small>You can start game after all users are added</small>
            </div>
          )}
        </div>
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
        <div className="mdl-cell mdl-cell--12-col">
          <ul className="demo-list-two mdl-list">
            <p>Members</p>
            {this.state.users.length !== 0 ? (
              this.state.users.map((u) => {
                return (
                  <li
                    className="mdl-list__item mdl-list__item--two-line"
                    key={u.uuid}
                  >
                    <span className="mdl-list__item-primary-content">
                      {/* <i class="material-icons mdl-list__item-avatar">person</i> */}
                      <span>{u.id} | </span>
                      <span>{u.name}</span>
                      <span className="mdl-list__item-sub-title">
                        Joined on :{Date(u.date_created)}
                      </span>
                    </span>
                  </li>
                );
              })
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
export default AddMember;
