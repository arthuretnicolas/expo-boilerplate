import React, { Component, PropTypes } from 'react'
import {
    Text,
    View
} from 'react-native'

import { connect } from 'react-redux'

import StartupActions from '../Reducers/StartupRedux'
import styles from './Styles'; // eslint-disable-line

export class Startup extends Component {

  componentDidMount () {
    this.props.loadApp()
  }

  render () {
    return (
      <View style={styles.core.screenContainer}>
        <Text>The app is loading, please wait...</Text>
        {/* <Spinner /> */}
      </View>
        )
  }
}

Startup.propTypes = {
  loadApp: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
  loadApp: () => dispatch(StartupActions.checkLogin())
})

export default connect(null, mapDispatchToProps)(Startup)
