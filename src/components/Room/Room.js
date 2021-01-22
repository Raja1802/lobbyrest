import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Room extends Component {
  state = {
    rooms: [],
    loading: true,
  };
  fetchRoom = () => {
    axios.get("https://fclobby2.herokuapp.com/api/room/").then((res) => {
      this.setState({
        rooms: res.data,
        loading: false,
      });
    });
  };
  componentDidMount() {
    this.fetchRoom();
  }
  componentWillUnmount() {
    this.setState({
      loading: true,
    });
  }
  render() {
    return (
      <>
        <div className="mdl-grid">
          {this.state.loading !== true ? (
            this.state.rooms.map((r) => {
              return (
                <div
                  className="mdl-cell mdl-cell--3-col lobby_mem"
                  key={r.uuid}
                >
                  <Link to={`lobby/${r.id}`}>
                    <h1 className="lobby_name">{r.room_name}</h1>
                    <p className="romm_created">
                      Created At: {Date(r.date_created)}
                    </p>
                    <p className="romm_created">
                      {" "}
                      People Reqired: {r.total_people}
                    </p>
                    <p className="romm_created">Entry fee: {r.entry_fee}</p>
                  </Link>
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
