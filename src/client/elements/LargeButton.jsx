import React, { Component } from "react"

export default class LargeButton extends Component {
    render() {
        return (
            <button
                className={this.props.className || "large-btn"}
                onClick={this.props.onClick}
                dataiscorrect={this.props.isCorrect ? this.props.isCorrect.toString() : "false"}
                style={this.props.style || {}}
                >{this.props.children}
            </button>
        )
    }
}