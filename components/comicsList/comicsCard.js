import React from "react"
import {Image, Text, View} from "react-native";
import {styles} from "../../styles/styles";


export const ComicsCard = ({item}) => {

    return (
            <View style={styles.row}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <Image style={styles.itemImage} source={{uri:item.img}}/>
            </View>
    )
};
