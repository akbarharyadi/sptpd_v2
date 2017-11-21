/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import '../config';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'mobx-react';
import stores from '../mobx';
import RootScreen from './rootScreen'

export default class App extends Component<{}> {
  render () {
    return (
      <Provider {...stores}>
        <RootContainer />
      </Provider>
    )
  }
}