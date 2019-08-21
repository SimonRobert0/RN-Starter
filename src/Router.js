import React from 'react'
import {
  Scene, Router
} from 'react-native-router-flux'

import Page1 from './Containers/Page1';

const RouterComponent = () => (
  <Router sceneStyle={{ backgroundColor: 'white' }}>
    <Scene key="root">
      <Scene key="Page1" component={Page1} initial />
    </Scene>
  </Router>
)

export default RouterComponent
