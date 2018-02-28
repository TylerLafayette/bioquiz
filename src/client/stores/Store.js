import { EventEmitter } from "events"
import dispatcher from "../dispatcher.js"

class Store extends EventEmitter {
    constructor() {
        super()
        this.data = {
            code: "",
            name: "",
            score: 0
        }
        this.questions = [
            {
                q: "What is one birth control method that also prevents STIs?",
                answers: [{
                    content: "Patch",
                    correct: false
                },{
                    content: "Shot",
                    correct: false
                },
                {
                    content: "Condom",
                    correct: true
                },{
                    content: "Implant",
                    correct: false
                },
                ]
            },{
                q: "How many fluids can pass HIV?",
                answers: [{
                    content: "6",
                    correct: true
                },{
                    content: "5",
                    correct: false
                },
                {
                    content: "9",
                    correct: false
                },{
                    content: "23",
                    correct: false
                },
                ]
            },{
                q: "What is the best birth control method?",
                answers: [{
                    content: "Condom",
                    correct: false
                },{
                    content: "Abstinence",
                    correct: true
                },
                {
                    content: "Patch",
                    correct: false
                },{
                    content: "Pill",
                    correct: false
                },
                ]
            },{
                q: "What does meiosis replicate?",
                answers: [{
                    content: "Sex cells",
                    correct: true
                },{
                    content: "Normal Cells",
                    correct: false
                },
                {
                    content: "Gametes",
                    correct: true
                },{
                    content: "The best cells",
                    correct: false
                },
                ]
            },
            {
                q: "What do you call someone attracted to ALL genders?",
                answers: [{
                    content: "Pansexual",
                    correct: true
                },{
                    content: "Bisexual",
                    correct: false
                },
                {
                    content: "Homosexual",
                    correct: false
                },{
                    content: "Heterosexual",
                    correct: false
                },
                ]
            },{
                q: "What do heterozygous alleles look like?",
                dontCap: true,
                answers: [{
                    content: "AA",
                    correct: false
                },{
                    content: "Aa",
                    correct: true
                },
                {
                    content: "aa",
                    correct: false
                },{
                    content: "AAAAAAAAAA",
                    correct: false
                },
                ]
            },
            {
                q: "How many blood types are there?",
                answers: [{
                    content: "1",
                    correct: false
                },{
                    content: "5",
                    correct: false
                },
                {
                    content: "4",
                    correct: true
                },{
                    content: "infinite",
                    correct: false
                },
                ]
            },{
                q: "What does homozygous look like?",
                dontCap: true,
                answers: [{
                    content: "AA",
                    correct: true
                },{
                    content: "aa",
                    correct: true
                },
                {
                    content: "Aa",
                    correct: false
                },{
                    content: "RR",
                    correct: true
                },
                ]
            },{
                q: "What does blood type A clump to?",
                answers: [{
                    content: "Anti-B",
                    correct: false
                },{
                    content: "Anti-A",
                    correct: true
                },
                {
                    content: "Anti-AB",
                    correct: false
                },{
                    content: "Water",
                    correct: false
                },
                ]
            },{
                q: "What is abstinence?",
                answers: [{
                    content: "Using a condom",
                    correct: false
                },{
                    content: "Talking to your partner",
                    correct: false
                },
                {
                    content: "Not having sex",
                    correct: true
                }
                ]
            },
            {
                q: "When does the cytoplasm divide?",
                answers: [{
                    content: "Telophase II",
                    correct: true
                },{
                    content: "Cytokinesis",
                    correct: true
                },
                {
                    content: "Anaphase",
                    correct: false
                },
                {
                    content: "Sometime",
                    correct: false
                }
                ]
            },{
                q: "What is a genotype?",
                answers: [{
                    content: "Characteristics",
                    correct: false
                },{
                    content: "Something's genes",
                    correct: true
                },
                {
                    content: "Something's jeans",
                    correct: false
                },
                {
                    content: "Dominant traits",
                    correct: false
                }
                ]
            },{
                q: "What is a phenotype?",
                answers: [{
                    content: "Something's genes",
                    correct: false
                },{
                    content: "Characteristics",
                    correct: true
                },
                {
                    content: "Something's jeans",
                    correct: false
                },
                {
                    content: "Dominant traits",
                    correct: false
                }
                ]
            },{
                q: "What is someone who feels differently from their biological sex?",
                answers: [{
                    content: "Pansexual",
                    correct: false
                },{
                    content: "Intersex",
                    correct: false
                },
                {
                    content: "Bisexual",
                    correct: false
                },
                {
                    content: "Transgender",
                    correct: true
                }
                ]
            },
        ]
    }
    getQuestions() {
        return this.questions
    }
    getInfo() {
        return this.data
    }
    action(a) {
        switch(a.type) {
            case "UPDATE_CODE": {
                this.data.code = a.data
                this.emit("CODE_CHANGED")
                break
            }
            case "UPDATE_NAME": {
                this.data.name = a.data
                this.emit("NAME_CHANGED")
                break
            }
            case "ADD_SCORE": {
                this.data.score = this.data.score + a.data
                console.log(this.data.score)
                this.emit("SCORE_CHANGED")
                break
            }
        }
    }
}

const store = new Store
dispatcher.register(store.action.bind(store))
window.store = store

export default store