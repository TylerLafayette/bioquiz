import React, { Component } from "react"

export default class Center extends Component {
    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: this.props.marginTop || "0px"
            }}>
                {this.props.children}
            </div>
        )
    }
}