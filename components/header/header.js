import React, {useEffect, useState} from "react"
import { View, Text } from "react-native";
import {styles} from "../../styles/styles";

export const Header = () => {
  return (
      <View style={styles.header}>
          <Text style={styles.headerText}>xkcd</Text>
      </View>
  )
};
