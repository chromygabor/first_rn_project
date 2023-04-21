/* eslint-disable @typescript-eslint/no-unused-vars */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {RootNavigator} from './src/RootNavigator';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
