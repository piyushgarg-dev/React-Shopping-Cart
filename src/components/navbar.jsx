import React from 'react';

class Nav extends React.Component{

    render(){
        return(
            <div>

                <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Shopping Cart
                <span
                className ="badge badge-pill badge-secondary m-2">
                {this.props.totalCounters}
                </span>
                </a>
                
                </nav>

            </div>
        );
    }
}

export default Nav;