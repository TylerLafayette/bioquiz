import React, { Component } from "react"
import Title from "../elements/Title.jsx"
import TextInput from "../elements/TextInput.jsx"
import LargeButton from "../elements/LargeButton.jsx"
import Center from "../layouts/Center.jsx"
import dispatcher from "../dispatcher.js"
import Store from "../stores/Store.js"

export default class Name extends Component {
    constructor() {
        super()
        this.state = {
            nameVal: ""
        }
    }
    onCodeChange(e) {
        this.setState({ nameVal: e.target.value })
    }
    nextClick() {
        dispatcher.dispatch({ type: "UPDATE_NAME", data: this.state.nameVal })
        this.props.history.push("/quiz/1")
    }
    render() {
        return (
            <div className="fullscreen-wrapper">
                <Title>Choose a name.</Title>
                <Center
                    marginTop="50px">
                    <TextInput
                        placeholder="nickname"
                        onChange={this.onCodeChange.bind(this)}
                        />
                </Center>
                <Center
                    marginTop="50px"
                    >
                    <LargeButton
                        onClick={this.nextClick.bind(this)}
                        >GO</LargeButton>
                </Center>
            </div>
        )
    }
}