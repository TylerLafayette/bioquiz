import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Start from "../views/Start.jsx"
import Name from "../views/Name.jsx"

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Start} />
                <Route exact path="/name" component={Name} />
            </Router>
        )
    }
}