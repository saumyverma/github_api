import React,{Component} from "react";
import NewUsersItem from './NewUsersItem';

export class Users extends Component{
  

    render(){
        return(
            <React.Fragment>
                       {this.props.all_users.map(user=>(
                            <NewUsersItem key={user.id} user={user}/>
                         ))}
           </React.Fragment>

        )
    }
}

export default Users;