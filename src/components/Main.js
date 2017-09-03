import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList.js'; 
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/userActions.js';

@connect((store) => {
  return {
    users: store.users
  }
})
export default class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }
  render() {
    return (
      <div>
        <UserList users ={this.props.users}/>
      </div>
    )
  }
}

