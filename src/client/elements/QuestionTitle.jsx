import React, { Component } from "react"

export default class QuestionTitle extends Component {
    render() {
        return (
            <span className="question-title">
                {this.props.children}
            </span>
        )
    }
}