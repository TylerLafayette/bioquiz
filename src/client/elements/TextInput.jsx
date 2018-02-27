import React, { Component } from "react"

export default class TextInput extends Component {
    render() {
        return (
            <input
                className="input-normal"
                type="text"
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                />
        )
    }
}