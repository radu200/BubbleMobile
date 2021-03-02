import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { formatDate, convertNumToTime } from '../../utils/time';
import Colors from "../../constants/Colors";
import StaticData from '../../data/static'
import { BookingSummary } from '../../types'


interface props {
  data: BookingSummary
}

export default function Booking({ data }: props) {

  const { hours, minutes } = convertNumToTime(1.4)

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleStatus}>
          {StaticData.booking.confirmed}
        </Text>
      </View>
      <Text style={styles.title}>
        <Text style={styles.titleLeft}>{StaticData.booking.bookingWith}: </Text> {data.otherUserFullName}
      </Text>
      <Text style={styles.title}>
        <Text style={styles.titleLeft}>{StaticData.booking.date}: </Text> {formatDate(data.scheduledStart)}
      </Text >
      <View style={styles.durationContainer}>
        <Text style={styles.titleLeft}>{StaticData.booking.duration}: </Text>
        {hours ?
          <Text style={styles.hours}>
            {hours} {StaticData.booking.hours}
          </Text> : null}
        {minutes ?
          <Text>
            {minutes} {StaticData.booking.minutes}
          </Text> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: Colors.light.background,
    marginBottom: 15,
    padding: 20,
    shadowColor: Colors.dark.background,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  header: {
    alignItems: 'center',
    marginBottom: 10,
  },

  title: {
    paddingBottom: 4,
  },

  titleStatus: {
    color: Colors.light.tint
  },

  titleLeft: {
    fontWeight: "bold"
  },

  hours: {
    marginRight: 5
  },

  durationContainer: {
    flexDirection: "row"
  }
});
