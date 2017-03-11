import { put, select } from 'redux-saga/effects'
import { NavigationActions } from '@expo/ex-navigation'
// import GithubActions from '../Reducers/GithubRedux'
// import { is } from 'ramda'
import Router from '../Routes'
// exported to make available for tests
// export const selectAvatar = (state) => state.github.avatar

const currentNavigatorUID = state => state.navigation.currentNavigatorUID

// process STARTUP actions
export function * startup (action) {
  console.log('ok')
  const navigatorUID = yield select(currentNavigatorUID)
  yield put(NavigationActions.replace(navigatorUID, Router.getRoute('login')))
  // yield put(NavigationActions.push(navigatorUID, Router.getRoute('tabScreen')));
  // const avatar = yield select(selectAvatar)
  // // only get if we don't have it yet
  // if (!is(String, avatar)) {
  //   yield put(GithubActions.userRequest('GantMan'))
  // }
}
