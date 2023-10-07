import 'react-native-gesture-handler';
import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
