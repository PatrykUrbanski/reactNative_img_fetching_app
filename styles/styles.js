import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        width: "100%",
    },
    row: {
        width: "90%",
        flex: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10,
        borderWidth: 3,
        borderColor: "#B2C6DB",
        borderStyle: "solid",
    },
    rowTitle: {
        fontSize: 20,
        width: "50%",
    },
    itemImage: {
        width: "50%",
        height: 150,
        resizeMode: "contain"
    },
    fullImage: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain'
    },
    button: {
        position: "absolute",
        bottom: 0,
        left: "10%",
        fontSize: 50,
        backgroundColor: "red",
        borderRadius: 15,
        alignItems: "center",
        padding: 10,
    }
});
