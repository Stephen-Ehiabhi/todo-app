import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export default function AddTodo({ createNewTodo }) {

  const [text,setText] = useState('')                      

 const ChangeHandler = (val) => {
        setText(val)
                 
 }

 return(
     <View style={styles.formArea}>
        <TextInput style={styles.input} placeholder={"e.g Shopping"} onChangeText={ChangeHandler}  />
        <Button color={"#632b6c"} title="Add Todo" onPress={() => createNewTodo(text)} />
     </View>               
 )    
}

const styles = StyleSheet.create({     
  formArea: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "#632b6c",
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 7,
    fontWeight: "400",
    color: "#31326F",
    fontSize: 18,
  },         
})