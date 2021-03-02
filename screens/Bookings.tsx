import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import BookingCard from '../components/cards/Booking';
import Spinner from '../components/progress/Spinner';
import ErrorAlert from '../components/alerts/Error';
import { BookingSummary } from '../types';

interface props {
  confirmedBookings: Array<BookingSummary>,
  spinner: boolean,
  failure: boolean,
  msg: string,
}

export default function BookingsScreen({
  confirmedBookings,
  spinner,
  failure,
  msg,
}: props) {

  return (
    <>
      {failure ? <ErrorAlert msg={msg} /> : null}
      {spinner ? <Spinner /> :
        <View style={styles.container}>
          <FlatList
            data={confirmedBookings}
            renderItem={({
              item
            }) => <BookingCard data={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>}
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});
