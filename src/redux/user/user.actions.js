// functions that return objects
// each objects is in the correct format that action is expected to be

import {UserActionTypes} from './user.types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  });