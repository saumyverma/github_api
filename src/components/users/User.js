import React, { Component } from 'react';

class User extends Component {
    // _isMounted = false;

    // state = {
    //     isLoading: true
    // }
    componentDidMount(props) {
        this._isMounted = true;
        // if (this._isMounted) {
        this.props.getUser(this.props.match.params.login)
        // console.log(this.props.user);
        console.log();
        // }
    }
    // componentWillUnmount() {
    //     this._isMounted = false;
    // }

    render() {
        const { avatar_url, followers, following, location, login, company, name, bio } = this.props.user;
        return (
            <React.Fragment>
                {/* 45555
                <h1>{this.props.user.name}</h1><br>
                </br>
                <h2>{bio}</h2> */}

                <div className="container height-100 d-flex justify-content-center align-items-center">
                    <div className="card text-center">
                        <div className="py-4 p-2">
                            <div> <img src={`${avatar_url}`} className="rounded" width="100" /> </div>
                            <div className="mt-3 d-flex flex-row justify-content-center">
                                <h5>{name}</h5> <span className="dots"><i className="fa fa-check"></i></span>
                            </div> <span>{bio}</span>
                            <div className="mt-3"> <button className="btn btn-danger">Following</button> <button className="btn btn-outline-secondary"><i className="fa fa-users"></i> {following}</button> </div>
                            <div className="mt-3"> <button className="btn btn-danger">Follow</button> <button className="btn btn-outline-secondary"><i className="fa fa-users"></i> {followers}</button> </div>

                        </div>
                        <div>
                            <ul className="list-unstyled list">
                                <li> <span className="font-weight-bold">Location</span>
                                    <div> <span className="mr-1">{location}</span> <i className="fa fa-angle-right"></i> </div>
                                </li>
                                <li> <span className="font-weight-bold">Login Name</span>
                                    <div> <span className="mr-1">{login}</span> <i className="fa fa-angle-right"></i> </div>
                                </li>
                                <li> <span className="font-weight-bold">Company</span>
                                    <div> <span className="mr-1">{company}</span> <i className="fa fa-angle-right"></i> </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )






    }
}
export default User