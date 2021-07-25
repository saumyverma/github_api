
import React, { Component } from 'react';

class Search extends Component {
    // constructor(){
    //     super()
    //     this.
    state = {
        text: ''
    }
    // }


    onChangeevent = (e) => {
        // alert("ok")
        // this.setState({text:e.target.value})
        console.log(e.target)
        console.log(e);
        this.setState({ text: e.target.value })

        console.log(e.target.value)
        // console.log(e.target.value)
    }
    onSubmit = e => {

        e.preventDefault()
        if (this.state.text === '') {
            alert("okkkk")
            this.props.setAlert('Please enter something.', 'danger');
        } else {
            console.log(this.state.text)
            this.props.SearchUsers(this.state.text)
            this.setState({ text: '' });
        }

    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            {/* <input type="text" name="text" value={this.state.text} placeholder="1Search Users....."/> */}
                            <input type="text" name="text" className="form-control" value={this.state.text} onChange={this.onChangeevent} />

                            <input type="submit" value="Search" className="btn btn-dark btn-block " />
                        </form>
                    </div>
                </div>

            </React.Fragment>

        )
    }


}

export default Search;