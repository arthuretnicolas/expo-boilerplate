import {
    createRouter
} from '@expo/ex-navigation'

import Startup from '../Containers/StartupContainer'
import Login from '../Containers/LoginContainer'
import TabScreen from '../Containers/TabScreenContainer'

export default createRouter(() => ({
  startup: () => Startup,
  login: () => Login,
  tabScreen: () => TabScreen
}))
