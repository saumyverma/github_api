import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Menu = (props) => {
    // constructor(props){
    //     super(props)
    // }
    // static defaultProps={
    //   title:"default title"
    // }

    // this.props
    // static propTypes={
    //     title:PropTypes.string.isRequired
    // }
    // mymenuFunction=(title_prams)=>{
    //     console.log(typeof title_prams);
    //     console.log(title_prams);
    // }

    // this.props.menufunction(){
    //     alert('menu function');
    // }
    return (

        <React.Fragment>
            <nav className="navbar bg-primary navbar navbar-expand-lg navbar-light">
                <h1>{props.title}  </h1>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to='/user/saumyverma'>User</Link>
                        </li>
                    </ul>
                </div>


            </nav>


        </React.Fragment>
    )


}


export default Menu;