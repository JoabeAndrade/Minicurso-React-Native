import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    TaskContainer: {
        backgroundColor: "#FFF",
        width: "100%",
        height: 53,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: "center",
        paddingLeft: 10,
    },

    TaskItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },

    icon: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        borderRadius: 5,
    }
});