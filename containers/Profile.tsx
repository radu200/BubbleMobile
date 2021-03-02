import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchUser } from '../redux/profile/operators';
import { profileTypes } from '../types';
import { RootState } from '../redux/rootReducer'
import ProfileScreen from "../screens/Profile";


interface props extends PropsFromRedux {
  fetchUser: any,
  user: profileTypes | any,
  spinner: boolean,
  failure: boolean
}

const Profile = ({ fetchUser, user, failure, spinner }: props) => {
  useEffect(() => {
    fetchUser();
  }, []);

  return <ProfileScreen user={user} spinner={spinner} failure={failure} />
}

const mapState = (state: RootState) => ({
  user: state.profile.user,
  spinner: state.profile.spinner,
  failure: state.profile.failure
})

const connector = connect(
  mapState,
  { fetchUser }
)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Profile);