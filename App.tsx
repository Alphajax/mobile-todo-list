import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TodoList from './src/layouts/ToDoList/ToDoList';
import {ToDoListStore} from './src/store/ToDoListStore';

function App(): JSX.Element {
  const todoListStore = new ToDoListStore();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Active tasks</Text>
        </View>
        <View style={styles.plusButtonContainer}>
          <Text style={styles.plusButton}>+</Text>
        </View>
      </View>

      <TodoList store={todoListStore} />
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
  plusButton: {
    fontSize: 40,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  plusButtonContainer: {
    flex: 0.1,

    height: 48,
    width: 48,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  headerTextContainer: {
    flex: 0.9,
  },
});

export default App;
