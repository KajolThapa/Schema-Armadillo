import React, { Component } from "react";
import ".././styles/App.css";
import { hot } from "react-hot-loader";

class Signup extends Component {

    render() {
        return (
            <div>
                <p>hello!</p>
                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                    <input type="text" email={this.state.email} onChange={this.handleChangeEmail} />
                    </label>
                    <label>
                        Password:
                    <input type="text" password={this.state.password} onChange={this.handleChangePassword} />
                    </label>
                    <input type="submit" value="Submit" />
                </form> */}
            </div>
        );
    }

}

export default Signup;