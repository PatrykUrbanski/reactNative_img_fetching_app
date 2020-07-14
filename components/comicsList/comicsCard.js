import React from "react"
import {Image, Text, View, Button, TouchableOpacity} from "react-native";
import {styles} from "../../styles/styles";



export const ComicsCard = ({ item }) => {
    return (
            <View style={styles.row}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <Image style={styles.itemImage} source={{uri:item.img}}/>
                <TouchableOpacity style={styles.button}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>

    )
};
