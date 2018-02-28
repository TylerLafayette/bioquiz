import React, { Component } from "react"
import Title from "../elements/Title.jsx"
import TextInput from "../elements/TextInput.jsx"
import LargeButton from "../elements/LargeButton.jsx"
import Center from "../layouts/Center.jsx"
import dispatcher from "../dispatcher.js"
import Store from "../stores/Store.js"
import { withRouter } from "react-router-dom"

export default class Start extends Component {
    constructor() {
        super()
        this.state = {
            codeVal: ""
        }
    }
    onCodeChange(e) {
        this.setState({ codeVal: e.target.value })
    }
    nextClick() {
        dispatcher.dispatch({ type: "UPDATE_CODE", data: this.state.codeVal })
        this.props.history.push("/name")
    }
    render() {
        return (
            <div className="fullscreen-wrapper">
                <Title style={{fontSize: "48px"}}>Welcome!</Title>
                <Center marginTop="100px">
                    <Title
                        style={{fontSize: "18px", fontWeight: 500}}
                    >This game will display a question. You must try to answer accurately as fast as possible. The longer it takes to answer a question, the less points you get! If you answer incorrectly, you get no points.</Title>
                </Center>
                <Center
                    marginTop="50px"
                    >
                    <LargeButton
                        onClick={this.nextClick.bind(this)}
                        >NEXT</LargeButton>
                </Center>
            </div>
        )
    }
}