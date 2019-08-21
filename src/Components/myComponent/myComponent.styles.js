import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  textLogo: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
    color: '#00a46b'
  }
})
