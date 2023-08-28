import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import ListItem from '../../components/ListItem/ListItem';
import {IToDoListProps} from './types';

const TodoList = ({store}: IToDoListProps) => {
  return (
    <ScrollView style={styles.container}>
      {store.todos.map(todo => (
        <ListItem
          todo={todo}
          key={todo.id}
          toggleCompleteToDo={store.toggleCompleteToDo}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 560,
  },
});

export default observer(TodoList);
