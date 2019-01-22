import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




// const user = localStorage.getItem('username');

// if (user === 'medico'){
//   console.log("medico");
// }

// nav_atendimentos

class Header extends Component {
  render() {
    return (
      <header>
          <nav>
              <ul className="header">
                    <li className="ui left floated header"><Link to="/">Home</Link></li>
                    <li className="ui left floated header"><Link to="/pacientes">Pacientes</Link></li>
                    <li className="ui left floated header"><Link to="/triagem">Triagem</Link></li>
                    <li className="ui left floated header" id="nav_atendimentos"><Link to="/atendimentos">Atendimentos</Link></li>
                    <li><Link to="/agenda">Agenda</Link></li>
                    {/*<li><Link to="/ajax">A jax</Link></li>/}
                    {/*<li className="pull-right"><Link to="/signin">Login</Link></li> */}
                    <li className="ui right floated header"><Link to="/signout">Logout</Link></li>
              </ul>
          </nav>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);

                // <ul>
                //   <li>
                //     <Link to="/users">Pacientes</Link>
                //   </li>
                //   <li>
                //     <Link to="/signout">Logout</Link>
                //   </li>
                // </ul>
                // :
                // <ul>
                //   <li>
                //     <Link to="/signin">Login</Link>
                //   </li>
                //   <li>
                //     {/* <Link to="/signup">Sign up</Link> */}
                //   </li>
                // </ul>