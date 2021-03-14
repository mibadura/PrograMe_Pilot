import React, {useState} from 'react'
import { LogBox } from 'react-native';
import Welcome from './screens/welcomeScreen'
import Navigator from './routes/drawer'

LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
]);

export default function App() {
  return (
    <Navigator/>
  )
}


