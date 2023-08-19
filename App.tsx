/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import TodoList from './src/layouts/ToDoList';

function App(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to our app</Text>
      <TodoList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default App;
