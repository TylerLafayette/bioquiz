import React, { Component } from "react"

export default class Title extends Component {
    render() {
        return (
            <span className="main-title-bold"
                style={this.props.style || {}}
            >
                {this.props.children}
            </span>
        )
    }
}