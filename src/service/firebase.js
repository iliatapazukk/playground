import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDUdLoCf3nxBnmgf-Qxxy3aDXJfUM7e-p0",
  authDomain: "pokemon-game-fac08.firebaseapp.com",
  databaseURL: "https://pokemon-game-fac08-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-fac08",
  storageBucket: "pokemon-game-fac08.appspot.com",
  messagingSenderId: "367512835365",
  appId: "1:367512835365:web:04c8c37efa11418ab8f6cc"
}

firebase.initializeApp(firebaseConfig)
export const fire = firebase
export const database = fire.database()

export default database;