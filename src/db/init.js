import * as firebase from "firebase/app"
import "firebase/database"
import config from "./config.json"

export let database = null

function init() {
  if (!database) {
    let app
    if (!firebase.apps.length) app = firebase.initializeApp(config)
    database = firebase.database(app)
  }
}

init()
