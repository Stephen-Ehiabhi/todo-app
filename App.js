import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView } from 'react-native';
import Nav from './components/Nav'
import AddTodo from './components/AddTodo'


export default function App() {

  const [todos, setTodos] = useState([]);

  const ErrorAlert = () => {
    Alert.alert('OPPS!', 'You cannot add an empty todo',
      [{ text: 'Understood', style: 'cancel' }]
    );
  }

  const LengthErrorAlert = () => {
    Alert.alert('OPPS!', 'Todo must be over 3 char long',
      [{ text: 'Understood', style: 'cancel' }]
    );
  }

  const DuplicateErrorAlert = () => {
    Alert.alert('OPPS!', 'Todo already exists',
      [{ text: 'Oops! my Bad', style: 'cancel' }]
    );
  }

  const createNewTodo = (text) => {

    if (text === "") {
      ErrorAlert()
    }
    else {
      if (text.length > 3) {
        setTodos(prevTodos => {
          return [
            { text: text, key: Math.random().toString() },
            ...prevTodos
          ]
        })

      } else {
        LengthErrorAlert()
      }
    }

  }



  const deleteTodos = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Nav />
        <AddTodo createNewTodo={createNewTodo} />
        <ScrollView>
          <View style={styles.todolist}>
            <FlatList
              data={todos}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => deleteTodos(item.key)}>
                    <Text style={styles.todo} >{item.text}</Text>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    fontFamily: "Mulish",
    letterSpacing: 1,
    backgroundColor: "#fcc3a3",
  },
  todolist: {
    display: "flex",
    alignItems: "center",
    marginTop: 8,
  },
  todo: {
    width: 320,
    backgroundColor: "#f09f9c",
    padding: 11,
    marginTop: 12,
    fontSize: 17,
    color: "#632b6c",
    fontWeight: "500",
    textAlign: "center",
    opacity: .9,

  },
})