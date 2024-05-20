import { View, Text } from "react-native";
import { styles } from "./styles"

type TaskPorps = {
    text: string;
}

export function Task(props: TaskPorps){
    return(
        <View style={styles.TaskContainer}>
            <View style={styles.TaskItem}>
                <View style={styles.icon}></View>
                <Text>{props.text}</Text>
            </View>
        </View>
    );
}