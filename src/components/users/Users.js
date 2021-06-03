import React, { Component } from "react";
import PropTypes from 'prop-types'
import UserItem from "../users/UserItem";

class Users extends Component {

  static propTypes = {
    users : PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired
  }
  
  render() {
    const { loading, users } = this.props;
    if (!loading) {
      return (
        <div style={userStyle}>
          {users.map((user) => {
            return <UserItem key={user.id} user={user} />;
          })}
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "5rem",
  padding: "1rem",
};

export default Users;
