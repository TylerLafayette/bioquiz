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

export default class QuizQuestion extends Component {
    constructor() {
        super()
        this.state = {
            codeVal: "",
            score: 0,
            currQuestion: 0,
            questions: [],
            reveal: false,
            correct: true,
            answered: false,
            points: 100
        }
        this.answerClick = this.answerClick.bind(this)
        this.toRenderReveal = this.toRenderReveal.bind(this)
    }
    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 100)
        this.setState({
            questions: Store.getQuestions(),
            score: Store.getInfo().score,
            currQuestion: parseInt(this.props.match.params.question) - 1
        })
        this.listen = this.props.history.listen((location, action) => {
            this.setState({
                codeVal: "",
                score: 0,
                currQuestion: 0,
                questions: [],
                reveal: false,
                correct: true,
                answered: false,
                points: 100
            })
            this.interval = setInterval(this.tick.bind(this), 100)
            this.setState({
                questions: Store.getQuestions(),
                score: Store.getInfo().score,
                currQuestion: parseInt(this.props.match.params.question) - 1
            })
        })
        store.on("SCORE_CHANGED", () => {
            this.setState({
                score: Store.getInfo().score
            })
        })
    }
    componentWillUnmount() {
        this.listen()
    }
    tick() {
        this.setState({
            points: this.state.points > 50 ? this.state.points - 1 : 50
        })
    }
    onCodeChange(e) {
        this.setState({ codeVal: e.target.value })
    }
    nextClick() {
        dispatcher.dispatch({ type: "UPDATE_CODE", data: this.state.codeVal })
        this.props.history.push("/name")
    }
    answerClick(e, corr) {
        clearInterval(this.interval)
        if(this.state.answered) return
        let { points } = this.state
        this.setState({
            reveal: true,
            correct: corr,
            answered: true,
            points: 0
        })
        if(corr) {
            dispatcher.dispatch({type: "ADD_SCORE", data: points})
        }
        setTimeout(
            () => {
                if(this.state.currQuestion+1 == this.state.questions.length)
                {
                    this.props.history.push(`/finish`)
                }else this.props.history.push(`/quiz/${this.state.currQuestion + 2}`)},
            2000
        )
    }
    toRenderReveal(item) {
        if(item.correct && this.state.reveal == true && this.state.correct) return "revealer revealed"
        if(item.correct && this.state.reveal == true) return "revealer revealed bad"
        if(!item.correct && this.state.reveal == true) return "revealer shrunk"
        return "revealer"
    }
    render() {
        return (
            <div className="fullscreen-wrapper">
                <Title>{this.state.currQuestion + 1}</Title>
                <div style={{transform: "scale(0.5)", position: "absolute", top: 0,right: 0}}><Title>{this.state.score + this.state.points}</Title></div>
                <Center
                    marginTop="10px">
                    <QuestionTitle>{this.state.questions[this.state.currQuestion] ? this.state.questions[this.state.currQuestion].q : "Loading..."}</QuestionTitle>
                </Center>
                <AnswerModule
                    marginTop="50px"
                    >
                    {this.state.questions[this.state.currQuestion] ? this.state.questions[this.state.currQuestion].answers.map((item, i) => (
                        <div className={this.toRenderReveal(item)}><div className="animation-ans" style={{animationDelay: 0.05 + 0.05 * i + "s"}}>
                        <LargeButton
                        className="large-quiz-btn"
                        isCorrect={item.correct}
                        style={{
                            animationDelay: 0.1 * i + "s"
                        }}
                        onClick={e => this.answerClick(e, item.correct)}
                        >{this.state.questions[this.state.currQuestion].dontCap ? item.content : item.content.toUpperCase()}</LargeButton></div></div>
                    )) : null}
                </AnswerModule>
            </div>
        )
    }
}