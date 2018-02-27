import { EventEmitter } from "events"
import dispatcher from "../dispatcher.js"

class Store extends EventEmitter {
    constructor() {
        super()
        this.data = {
            code: "",
            name: ""
        }
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
        }
    }
}

const store = new Store
dispatcher.register(store.action.bind(store))

export default store