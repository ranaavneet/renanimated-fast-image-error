import React, {useRef, useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native'
import Animated from "react-native-reanimated"
import FastImage from "react-native-fast-image"

export const ReanimatedFastImage = Animated.createAnimatedComponent(FastImage)
const App = () => {

  const [value, setValue] = useState(false)
  const cardImageRef = useRef<any>(null)

  const onPress = () => {
    setValue(!value)
  }

  return (
    <View style={styles.container}>
      <ReanimatedFastImage ref={cardImageRef} />
      {value ? <View /> : null}
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text>Toggle Set State</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  } as ViewStyle,
  buttonStyle: {
    backgroundColor: 'grey',
    width: 200,
    height: 50,
    marginVertical: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App
