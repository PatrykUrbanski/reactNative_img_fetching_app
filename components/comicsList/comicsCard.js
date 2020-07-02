import React from "react"
import {Image, Text, View} from "react-native";
import {styles} from "../../styles/styles";
import TouchableOpacity from "react-native-web/src/exports/TouchableOpacity";
import TouchableHighlight from "react-native-web/src/exports/TouchableHighlight";

export const ComicsCard = ({navigation, item}) => {
    const handlePress = () => {
        navigation.navigate("Details")
    }

    return (
        <TouchableHighlight>
            <View style={styles.row} onPress={handlePress}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <Image style={styles.itemImage} source={{uri:item.img}}/>
            </View>
        </TouchableHighlight>

    )
};
