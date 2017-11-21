import { Text } from 'react-native'

export default () => {
  if (__DEV__) {
    // If ReactNative's yellow box warnings are too much, it is possible to turn
    // it off, but the healthier approach is to fix the warnings.  =)
    console.disableYellowBox = __DEV__
  }

  // Allow/disallow font-scaling in app
  Text.defaultProps.allowFontScaling = true
}
