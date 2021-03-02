import React from "react";
import { StyleSheet, View } from "react-native";
import Spinner from '../components/progress/Spinner';
import ErrorAlert from '../components/alerts/Error';
import StaticData from '../data/static';
import ProfileCard from '../components/cards/profile/Profile';
import { profileTypes } from '../types'

interface props {
  user: profileTypes,
  spinner: boolean,
  failure: boolean,
}

export default function ProfileScreen({
  user,
  spinner,
  failure,
}: props) {

  return (
    <>
      {failure ? <ErrorAlert msg={StaticData.msg.error} /> : null}
      {spinner ? <Spinner /> :
        <View style={styles.container}>
          {user && <ProfileCard user={user} />}
        </View>}
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});
