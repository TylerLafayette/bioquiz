import React, { Component } from "react"

export default class Title extends Component {
    render() {
        return (
            <span className="main-title-bold">
                {this.props.children}
            </span>
        )
    }
}