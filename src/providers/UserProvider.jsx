import React, { Component, createContext } from 'react';
import { auth } from '../firebase';
export const UserContext = createContext({
  user: null,
  name: '',
});
class UserProvider extends Component {
  state = {
    user: null,
    name: '',
  };

  componentDidMount = () => {
    auth.onAuthStateChanged((userAuth) => {
      this.setState({ user: userAuth, name: userAuth.displayName });
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
