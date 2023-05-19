// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAzqI6DuhkQiyH-wUDFoAWp8HTf8xz3ibE',
  authDomain: 'online-game-quiz-78a77.firebaseapp.com',
  databaseURL: 'https://online-game-quiz-78a77-default-rtdb.firebaseio.com',
  projectId: 'online-game-quiz-78a77',
  storageBucket: 'online-game-quiz-78a77.appspot.com',
  messagingSenderId: '176815131049',
  appId: '1:176815131049:web:77558b085f36ee2901dcb8',
}

const app = initializeApp(firebaseConfig)
const database = getDatabase()

export class User {
  constructor() {
    this.userId = "Need to complete"
    this.reference = ref(database, `/${this.userId}`)
    this.database = ref(database)
  }

  writeUserInitialInfos(address, userName, role, position) {
    set(this.reference, {
      address,
      userName,
      role,
      position,
      userTotalScore: {
        userTotalScore: 0,
      },
      userStepScore: {
        fase01: { score: 0 },
        fase02: { score: 0 },
        fase03: { score: 0 },
        fase04: { score: 0 },
        fase05: { score: 0 },
        fase06: { score: 0 },
        fase07: { score: 0 },
      },
      userTotalTime: {
        userTotalTime: 0,
      },
      userStepTime: {
        fase01: { time: 0 },
        fase02: { time: 0 },
        fase03: { time: 0 },
        fase04: { time: 0 },
        fase05: { time: 0 },
        fase06: { time: 0 },
        fase07: { time: 0 },
      },
      stepStop: {
        stepStop: 0,
      },
    })
  }

  writeUserTotalScore(userTotalScore) {
    set(ref(database, `${this.userId}/userTotalScore`), {
      userTotalScore: userTotalScore,
    })
  }

  writeUserStepScore(userStep, userScore) {
    set(ref(database, `${this.userId}/userStepScore/${userStep}`), {
      score: userScore,
    })
  }

  writeUserTotalStepTime(userTotalTime) {
    set(ref(database, `${this.userId}/userTotalTime`), {
      userTotalTime: userTotalTime,
    })
  }

  writeUserStepTime(userStep, userTotalTime) {
    set(ref(database, `${this.userId}/userStepTime/${userStep}`), {
      time: userTotalTime,
    })
  }

  writeUserStepStop(stepStop) {
    set(ref(database, `${this.userId}/stepStop`), {
      stepStop: stepStop,
    })
  }
}

export default User
