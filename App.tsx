import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native"; 
import { Task } from "./src/components/Task";

export default function App(){
  const [task, setTask] = useState<string>("");
  const [taskItems, setTaskItem] = useState<string[]>([]);

  function handleAddTask(){
    setTaskItem([...taskItems, task]);
    setTask("");
  }

  function taskDone(index: number){
    let itemsCopy = [...taskItems]; 
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  }
  
  return(
    <View style={styles.container}>
      <View style={styles.AppContainer}>
        <Text style={styles.title}>As tarefas de hoje</Text>
          
        <View style={styles.taskAdd}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar uma tarefa"
            value={task}
            onChangeText={text => setTask(text)}
          />
          <TouchableOpacity 
            style={styles.button}
            onPress={() => handleAddTask()}  
          >
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>

          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => taskDone(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              ) 
            })
          }

      </View>
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  AppContainer: {
    paddingTop: 80,
    marginHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },

  taskAdd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },

  input: {
    width: "70%",
    height: 45,
    backgroundColor: "#FFF",
    borderRadius: 60,
    paddingLeft: 10,  
  },

  button: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 52,
    alignItems: "center",
    justifyContent: "center",
  },

  textButton: {
    fontSize: 50,
    color: "#C0C0C0"
  },
});