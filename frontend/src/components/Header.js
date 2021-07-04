import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                     width="300"
                     className="img-thumbnail"
                     style={{ marginTop: "20px"}}
                     alt="Rocket logo"
                />
                <hr/>
                <h5>
                    presents
                </h5>
                <h1>
                    App with React + Django
                </h1>
            </div>
        );
    }
}

export default Header;