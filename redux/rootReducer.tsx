import { combineReducers } from "redux";
import { profileReducer } from './profile/reducers'

const rootReducer = combineReducers({
  profile: profileReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer