import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  checkLogin: []
})

export const StartupTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  jwt: ''
})

export const checkLogin = (state: Object, action: Object) =>
  state.merge({
    jwt: ''
  })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHECK_LOGIN]: checkLogin
})
