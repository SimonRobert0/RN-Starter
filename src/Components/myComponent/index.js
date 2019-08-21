import React from 'react'
import { View, Text } from 'react-native'
import I18n from 'react-native-i18n'
import styles from './myComponent.styles'

const MyComponent = () => (
  <View>
    <Text style={styles.text}>
      {I18n.t('myComponentTitle')}
    </Text>
  </View>
)

export default MyComponent
