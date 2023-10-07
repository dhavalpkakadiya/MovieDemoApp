import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import RootNavigation from './src/navigation/RootNavigation';
import { getData } from './src/storage/storage';
import {LogBox} from 'react-native'

LogBox.ignoreAllLogs(true);

type Props = {}

const App = (props: Props) => {

  return (
    <RootNavigation />
  )
}

export default App