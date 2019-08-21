// Saga effects
import { all } from 'redux-saga/effects'

import userSagas from './Users/saga'

export default function* rootSaga() {
  yield all([
    userSagas()
  ])
}
