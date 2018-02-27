import React, { Component } from "react"
import Title from "../elements/Title.jsx"
import TextInput from "../elements/TextInput.jsx"
import LargeButton from "../elements/LargeButton.jsx"
import Center from "../layouts/Center.jsx"
import dispatcher from "../dispatcher.js"
import Store from "../stores/Store.js"
import { withRouter } from "react-router-dom"

export default class QuizQuestion extends Component {
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
                <Center>
                    <Title>1/4</Title>
                </Center>
                <Center
                    marginTop="50px">
                    <TextInput
                        placeholder="123456"
                        onChange={this.onCodeChange.bind(this)}
                        />
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