// eslint-disable no-underscore-dangle
// @flow
// import { AsyncStorage } from 'react-native'
import { combineReducers, createStore as reduxCreateStore, applyMiddleware, compose } from 'redux'
import { createNavigationEnabledStore, NavigationReducer } from '@expo/ex-navigation'
import createSagaMiddleware from 'redux-saga'
import { autoRehydrate } from 'redux-persist'

import RootSaga from '../Sagas'

/* eslint-disable no-multi-spaces */

const mainReducer = combineReducers({
  startup: require('../Reducers/StartupRedux').reducer,
  login: require('../Reducers/LoginRedux').reducer,
  navigation: NavigationReducer
})

function createStore () {
  const sagaMiddleware = createSagaMiddleware()

    // const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    //     ? global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    //         /* options */
    //     })
    //     : compose;

  const enhancer = compose(
        applyMiddleware(sagaMiddleware)
        // , ...middleware)
    )

  const createStoreWithNavigation = createNavigationEnabledStore({
    reduxCreateStore,
    navigationStateKey: 'navigation'
  })

    // const store = createStoreWithNavigation(reducer, enhancer);
  const store = createStoreWithNavigation(mainReducer, enhancer, autoRehydrate())

  sagaMiddleware.run(RootSaga)

  return store
}

const store = createStore()

export default store
