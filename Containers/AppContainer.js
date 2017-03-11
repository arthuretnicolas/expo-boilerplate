import React from 'react'
import { Provider } from 'react-redux'
import {
    NavigationProvider,
    StackNavigation,
    NavigationContext
} from '@expo/ex-navigation'
import Router from '../Routes'
import store from '../Store'

const navigationContext = new NavigationContext({
  router: Router,
  store: store
})

const AppContainer = () => (
  <Provider store={store}>
    <NavigationProvider context={navigationContext}>

      <StackNavigation navigatorUID='index' initialRoute={Router.getRoute('startup')} />

    </NavigationProvider>
  </Provider>
)

export default AppContainer
