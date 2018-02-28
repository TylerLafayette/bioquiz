import React, { Component } from "react"
import Title from "../elements/Title.jsx"
import QuestionTitle from "../elements/QuestionTitle.jsx"
import TextInput from "../elements/TextInput.jsx"
import LargeButton from "../elements/LargeButton.jsx"
import Center from "../layouts/Center.jsx"
import AnswerModule from "../layouts/AnswerModule.jsx"
import dispatcher from "../dispatcher.js"
import Store from "../stores/Store.js"
import { withRouter } from "react-router-dom"

export default class Finish extends Component {
    render() {
        return (
            <div className="fullscreen-wrapper">
                <Center><Title style={{
                    fontSize: "24px"
                }}>Congratulations, {Store.getInfo().name}!</Title></Center>
                <Center marginTop="100px"><Title
                    style={{fontSize:"36px"}}>You finished with {Store.getInfo().score} points!</Title></Center>
            </div>
        )
    }
}