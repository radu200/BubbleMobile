import {
  requestProfile,
  receivedProfile,
  failureProfile
} from "./actions";
import { getUser } from "../../api/Users";

export const fetchUser = () => async (dispatch: Function) => {
  try {
    dispatch(requestProfile());
    const res = await getUser();
    dispatch(receivedProfile(res.data));
  } catch (err) {
    dispatch(failureProfile());
  }
};