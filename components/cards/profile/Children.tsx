import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import StaticData from '../../../data/static'
import GirlIcon from "../../../assets/images/girl.png";
import BoyIcon from "../../../assets/images/boy.png";

type children = {
  age: number,
  gender: number
}
type props = {
  data: Array<children>
}


export default function Children({ data }: props) {
  const {
    children,
  } = StaticData.profile
  return (
    <>
      <Text style={styles.title}>{children.title}</Text>
      <View style={styles.childrenSection}>
        {data.map((c: children, i: number) => (
          <View key={i} style={styles.childrenContainer}>
            <Image style={styles.childrenIcon} source={c.gender ? BoyIcon : GirlIcon} />
            <Text>{c.age} {children.years} </Text>
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  childrenSection: {
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  childrenContainer: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  childrenIcon: {
    width: 25,
    height: 25,
    margin: 5,
  }
});
