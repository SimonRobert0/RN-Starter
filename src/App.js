import React, { Fragment } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

// Redux
import {
  createStore, applyMiddleware, combineReducers, compose
} from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import createSagaMiddleware from 'redux-saga'
import reducers from './Redux/reducers'

// Redux saga
import rootSaga from './Redux/rootSaga'

// Import Components
import RouterComponent from './Router'

import './i18n/I18n'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    ...reducers
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger)
  )
)

const App = () =>  (
  <Fragment>
    <StatusBar barStyle="dark-content" />
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <RouterComponent />
      </SafeAreaView>
    </Provider>
  </Fragment>
)

sagaMiddleware.run(rootSaga)

export default App
