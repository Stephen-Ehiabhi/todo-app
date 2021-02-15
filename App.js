import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const todoData = [
    { text: "Coding", key: "1" },
    { text: "Learning something new", key: "2" },
    { text: "Watching Anime", key: "3" },
    { text: "Eating", key: "4" },
  ];

  return (
    <View style={styles.container}>
      {/* nav section */}
      <Text style={styles.nav}>Todo App</Text>
      <View style={styles.formArea}>
        {/* Form section */}
        <TextInput style={styles.input} placeholder={ "e.g Shopping" } />
        <Button  title="Add a Todo" />
      </View>
      <View style={styles.todolist}>
        {/* Todo list section */}
        {todoData.map(item => (
          <TouchableOpacity>
            <Text style={styles.todo} key={item.key} >{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* footer */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    fontFamily: "Mulish",
    letterSpacing: 1,
  },
  nav: {
    backgroundColor: "blue",
    height: 80,
    paddingTop: 15,
    fontWeight: 600,
    color: "#fff",
    fontSize: 30,
    width: "auto",
    textAlign: "center",
  },
  todo: {
    width: 400,
    height: 40,
    backgroundColor: "#fff",
    paddingTop: 6,
    marginTop: 12,
    fontSize: 17,
    fontWeight: 500,
    textAlign: "center",
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "grey",
  },
  todolist: {
    width: "auto",
    display: "flex",
    alignItems: "center",
  },
  formArea: {
    marginVertical: 23,
    marginHorizontal: 50,
  },
  input: {
    height: 30,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "lightgrey",
    marginBottom: 10,
    padding: 17,
    fontSize: 18,
  },
})