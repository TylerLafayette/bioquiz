import React, { Component } from "react"

export default class LargeButton extends Component {
    render() {
        return (
            <button
                className="large-btn"
                onClick={this.props.onClick}
                >{this.props.children}
            </button>
        )
    }
}