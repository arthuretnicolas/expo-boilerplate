import { takeLatest } from 'redux-saga'
// import API from '../Services/Api'
// import FixtureAPI from '../Services/FixtureApi'
// import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Reducers/StartupRedux'
// import { GithubTypes } from '../Redux/GithubRedux'
import { LoginTypes } from '../Reducers/LoginRedux'
// import { OpenScreenTypes } from '../Redux/OpenScreenRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'
// import { getUserAvatar } from './GithubSagas'
// import { openScreen } from './OpenScreenSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.CHECK_LOGIN, startup),
    // takeLatest(StartupTypes.CHECK_LOGIN, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, login)
    // takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),

    // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ]
}
