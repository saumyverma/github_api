import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Menu from "./components/Menu";
import Users from "./components/users/Users";
import axios from 'axios';
import Search from './components/users/Search'
// import { Test } from "./components/Test";


class App extends Component {
  state = {
    users: [],
    loading: false
  }
  myfunction1 = () => {
    return "this is mu function1";
  }
  async componentDidMount() {
    console.log(process.env.TEST_CLIENT_IS);
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    console.log(res.data);
    this.setState({ users: res.data, loading: false })
  }
  SearchUsers = async (text) => {
    console.log("app" + text);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    console.log(`https://api.github.com/search/users?q=${text}`);
    console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false })
  }

  render() {

    return (

      <React.Fragment>
        <Menu title="" />
        <Search SearchUsers={this.SearchUsers} />
        {/* <Test/> */}
        <div className="container">
          <div className="row">
            <Users loading={this.state.loading} all_users={this.state.users} />
          </div>
        </div>
        <div>
          {/* <h1>This is my first heading {`${this.myfunction1()} ${myfunction2()}`}</h1> */}
        </div>
      </React.Fragment>
    )
  }
}

export default App;
