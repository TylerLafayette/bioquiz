import React, { Component } from "react"

export default class AnswerModule extends Component {
    render() {
        return (
            <div className="answer-module">
                {this.props.children}
            </div>
        )
    }
}