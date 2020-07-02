import React from "react"
import {Image, Text, View} from "react-native";
import {styles} from "../../styles/styles";

export const ComicsDetails = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <Image source={{uri:navigation.getParam("img")}} style={styles.fullImage} />
        </View>
    )
};

