import React from 'react';
// import PropTypes from 'prop-types';

 const Menu=(props)=>{
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
        return(

        <React.Fragment>
            <nav className="navbar bg-primary navbar navbar-expand-lg navbar-light">
            <h1>{props.title}  </h1>
            </nav>
            

        </React.Fragment>
        )
    
    
}


export default Menu;