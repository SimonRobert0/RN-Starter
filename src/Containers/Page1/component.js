import React from 'react'
import { View } from 'react-native'

import styles from './page1.styles'

// Import components
import MyComponent from '../../Components/myComponent'


const Page1Component = () => (
  <View style={styles.container}>
    <MyComponent />
  </View>
)

export default Page1Component
