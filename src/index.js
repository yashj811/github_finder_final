import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";

class Index extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }
  render() {
   const {users,loading} = this.state;
    return (
      <div className="">
        <Navbar />
        <div className="">
          <Users users = {users} loading={loading} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
