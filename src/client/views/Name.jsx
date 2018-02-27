import React, { Component } from "react"
import Title from "../elements/Title.jsx"
import TextInput from "../elements/TextInput.jsx"
import LargeButton from "../elements/LargeButton.jsx"
import Center from "../layouts/Center.jsx"

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
        console.log("Clicked")
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