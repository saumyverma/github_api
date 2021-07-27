import React from "react";
import { Link } from "react-router-dom";
const NewUsersItem = (props) => {
    // constructor(){
    //     super();
    //    this.state = {
    //         id:"1",
    //         image:"https://avatars.githubusercontent.com/u/1?v=4",
    //         html_url:"https://github.com/mojombo"
    //     }
    // }


    const { id, avatar_url, html_url, login } = props.user;
    return (
        <React.Fragment>

            <div className="card" style={{ width: '263px' }}>
                <img src={avatar_url} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title"><b>{login}</b></h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href={html_url} target="_blank" className="btn btn-primary">View Profile</a> */}
                    <Link className="btn btn-primary" to={`user/${login}`} >View Profile</Link>
                </div>

            </div>
        </React.Fragment>
    )

}

export default NewUsersItem;