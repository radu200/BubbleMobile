import React, { useMemo } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../../constants/Colors";
import StaticData from '../../../data/static'
import DefaultAvatar from '../../../assets/images/profile_default.png';
import ProfileImageExmaple from "../../../assets/images/profile-image-example.png";
import Children from './Children';
import { profileTypes } from '../../../types'

interface props {
  user: profileTypes,
}

export default function Profile({ user }: props) {
  const {
    address,
    aboutMe,
    contacts
  } = StaticData.profile
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={user.profileImageUrl ? ProfileImageExmaple : DefaultAvatar}
        />
        <Text style={styles.userName}>
          {user.fullName}
        </Text>
        <Text style={styles.accountTotal}>{user.accountTotal} {StaticData.currency.GBP} </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{contacts}</Text>
        <Text>
          {user.mobileNumber}
        </Text>
        <Text>
          {user.email}
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{aboutMe}</Text>
        <Text>
          {user.biography}
        </Text>
      </View>

      <View style={styles.container}>
        <Children data={user.children} />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>{address.title}</Text>
        <Text>
          {address.houseNo}: {user.address.houseNo}
        </Text>
        <Text>
          {address.postcode}: {user.address.postcode}
        </Text>
        <Text>
          {address.street}: {user.address.street}
        </Text>
        <Text>
          {address.town}:  {user.address.town}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
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
    alignItems: 'center'
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: Colors.light.tint,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 75,
  },

  userName: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 8,
  },
  accountTotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.tint
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
  }
});
