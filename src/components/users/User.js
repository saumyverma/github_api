import React, { Component } from 'react';

class User extends Component {
    componentDidMount(props) {
        this.props.getUser(this.props.match.params.login)
        // console.log(this.props.user);
        console.log();
        // alert("ok");
        // console.log(this.props.user.name);
    }
    render() {
        const { avatar_url, followers, following, location, login, company, name, bio } = this.props.user;
        return (
            <React.Fragment>
                <h1>{name}</h1><br>
                </br>
                <h2>{bio}</h2>

                <div className="container height-100 d-flex justify-content-center align-items-center">
                    <div className="card text-center">
                        <div className="py-4 p-2">
                            <div> <img src={`${avatar_url}`} className="rounded" width="100" /> </div>
                            <div className="mt-3 d-flex flex-row justify-content-center">
                                <h5>{name}</h5> <span className="dots"><i className="fa fa-check"></i></span>
                            </div> <span>{bio}</span>
                            <div className="mt-3"> <button className="btn btn-danger">Following</button> <button className="btn btn-outline-secondary"><i className="fa fa-users"></i> {following}</button> </div>
                            <div className="mt-3"> <button className="btn btn-danger">Follow</button> <button className="btn btn-outline-secondary"><i className="fa fa-users"></i> {following}</button> </div>

                        </div>
                        <div>
                            <ul className="list-unstyled list">
                                <li> <span className="font-weight-bold">Post</span>
                                    <div> <span className="mr-1">5</span> <i className="fa fa-angle-right"></i> </div>
                                </li>
                                <li> <span className="font-weight-bold">Comments</span>
                                    <div> <span className="mr-1">45</span> <i className="fa fa-angle-right"></i> </div>
                                </li>
                                <li> <span className="font-weight-bold">Favorites</span>
                                    <div> <span className="mr-1">15</span> <i className="fa fa-angle-right"></i> </div>
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