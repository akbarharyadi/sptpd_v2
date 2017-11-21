import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import Navigation from '../Navigation/AppNavigation'

import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import { addNavigationHelpers } from 'react-navigation';

// Styles
import styles from '../themes/RootStyles'

@inject('navigationStore')
@observer
class RootScreen extends Component {

  constructor(props, context) {
    super(props, context)
    this.nav = this.props.navigationStore
  }
  
  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar />
        <Navigation
          navigation={addNavigationHelpers({
            dispatch: this.nav.dispatch,
            state: this.nav.navigationState,
          })}
        />
      </View>
    )
  }
}

export default RootScreen;
