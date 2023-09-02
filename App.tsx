import React from 'react';
import {View, StyleSheet} from 'react-native';
import TodoList from './src/layouts/ToDoList/ToDoList';
import {ToDoListStore} from './src/store/ToDoListStore';

function App(): JSX.Element {
  const todoListStore = new ToDoListStore();
  return (
    <View style={styles.container}>
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
});

export default App;
