/* eslint-disable func-names */
import {
  all, put, fork, takeEvery
} from 'redux-saga/effects'
import I18n from 'react-native-i18n'

export function* connection() {
  yield takeEvery('EXAMPLE_ACTION', function* () {
    try {
      const user = {
        firstname: 'John',
        lastname: 'Doe',
        age: 42
      }

      yield put({
        type: 'EXAMPLE_ACTION_SUCCESS', user
      })
    } catch (e) {
      yield put({ type: 'EXAMPLE_ACTION_FAILURE', e: I18n.t('MessageError') })
    }
  })
}

export default function* rootSaga() {
  yield all([
    fork(connection)
  ])
}
