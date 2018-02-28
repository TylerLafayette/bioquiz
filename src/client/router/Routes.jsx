import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Start from "../views/Start.jsx"
import Name from "../views/Name.jsx"
import QuizQuestion from "../views/QuizQuestion.jsx"
import Finish from "../views/Finish.jsx"

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Start} />
                    <Route exact path="/name" component={Name} />
                    <Route exact path="/quiz/:question" component={QuizQuestion} />
                    <Route exact path="/finish" component={Finish} />
                </Switch>
            </Router>
        )
    }
}