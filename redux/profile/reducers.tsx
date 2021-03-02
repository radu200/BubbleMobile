import {
  REQUEST_PROFILE,
  RECEIVED_PROFILE,
  FAILURE_PROFILE,
  userState,
  profileActions
} from './types';


const initialState: userState = {
  user: null,
  spinner: false,
  failure: false,
}

export function profileReducer(
  state = initialState,
  action: profileActions
): userState {
  switch (action.type) {
    case REQUEST_PROFILE:
      return { ...state, spinner: true }
    case RECEIVED_PROFILE:
      return { ...state, spinner: false, user: action.data }
    case FAILURE_PROFILE:
      return { ...state, spinner: false, failure: true }
    default:
      return state
  }
}