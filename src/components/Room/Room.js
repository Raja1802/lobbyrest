import React, { Component } from "react";
import axios from "axios";
class Room extends Component {
  state = {
    rooms: [],
    loading: true,
  };
  fetchRoom = () => {
    axios.get("http://localhost:8000/api/room/").then((res) => {
      this.setState({
        rooms: res.data,
        loading: false,
      });
    });
  };
  componentDidMount() {
    this.fetchRoom();
  }
  render() {
    return (
      <>
        <div className="mdl-grid">
          {this.state.loading !== true ? (
            this.state.rooms.map((r) => {
              return (
                <div className="mdl-cell mdl-cell--3-col lobby_mem">
                  <h1 className="lobby_name">tirro</h1>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}
export default Room;
