// import logo from './logo.svg';
import './App.css';
import React, { Component, Fregment } from 'react';
import Menu from "./components/layout/Menu";
import Users from "./components/users/Users";
import axios from 'axios';
import Search from './components/users/Search'
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import User from './components/users/User';
// import { Test } from "./components/Test";
// lession 19

class App extends Component {
  state = {
    users: [],
    user: null,
    loading: false,
    alert: null
  }
  myfunction1 = () => {
    return "this is mu function1";
  }
  async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(res.data);
    this.setState({ users: res.data, loading: false })
  }
  SearchUsers = async (text) => {
    // console.log("app" + text);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    console.log(`https://api.github.com/search/users?q=${text}`);
    // console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => { this.setState({ alert: null }) }, 5000);
  }

  //get single user info from Github api
  getUser = async (username) => {
    // alert(username);
    const userInfo = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: userInfo.data });
    console.log(this.state.user);
  }

  render() {

    return (
      <Router>
        <React.Fragment>

          <Menu title="" />
          <Alert alert={this.state.alert} />

          <Switch>
            {/* first route or default route */}
            <Route exact path='/'>
              <Search SearchUsers={this.SearchUsers} setAlert={this.setAlert} />
              <div className="container">
                <div className="row">
                  <Users loading={this.state.loading} all_users={this.state.users} />
                </div>
              </div>
            </Route>
            {/* second route */}
            <Route path='/about'>
              <About />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>

            {/* <Route exact path='/user/:login'>
              <User getUser={this.getUser} user={this.state.user} />
            </Route> */}

            <Route exact path='/user/:login'
              render={props => (

                <User {...props} getUser={this.getUser} user={this.state.user} />
              )}
            >

            </Route>

          </Switch>





          <div>
            {/* <h1>This is my first heading {`${this.myfunction1()} ${myfunction2()}`}</h1> */}
          </div>


        </React.Fragment>
      </Router>
    )
  }
}

export default App;
