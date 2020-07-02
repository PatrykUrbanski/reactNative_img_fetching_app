import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        maxWidth: "100%",
    },
    row: {
        width: "100%",
        flex: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        borderWidth: 3,
        borderColor: "#B2C6DB",
        borderStyle: "solid"
    },
    rowTitle: {
        fontSize: 20,
    },
    itemImage: {
        width: "50%",
        height: 150,
        resizeMode: "contain"
    },
});
