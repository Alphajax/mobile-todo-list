/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TodoList from './src/layouts/ToDoList';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Active tasks</Text>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerText: {
    fontSize: 44,
    textAlign: 'center',
  },
});

export default App;
