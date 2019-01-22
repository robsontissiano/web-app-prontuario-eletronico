import React from 'react';

// import PropTypes from "prop-types";
import LoginForm from '../forms/LoginForm';


class LoginPage extends React.Component {
    submit = data => {
        // console.log(data);
    };

    render(){
        return(
            //<div class="ui middle aligned center aligned grid">
                <div className="column">
                    {/* <h1>Pagina de Login</h1> */}
                    <LoginForm submit={this.submit} />
                </div>
            //</div>
        );
    }
}

export default LoginPage;
