import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useToggle} from 'react-use';
import ListItem from '../../components/ListItem/ListItem';
import {IToDoListProps} from './types';
import CreateToDoModal from '../../components/CreateToDoModal/CreateToDoModal';

const TodoList = ({store}: IToDoListProps) => {
  const [isModalVisible, toggleIsModalVisible] = useToggle(false);
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Active tasks</Text>
        </View>
        <View style={styles.plusButtonContainer}>
          <Pressable onPress={toggleIsModalVisible}>
            <Text style={styles.plusButton}>+</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView style={styles.container}>
        {store.todos.map(todo => (
          <ListItem
            todo={todo}
            key={todo.id}
            toggleCompleteToDo={store.toggleCompleteToDo}
          />
        ))}
      </ScrollView>
      <CreateToDoModal
        isOpened={isModalVisible}
        toggleModalVisibility={toggleIsModalVisible}
        store={store}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 560,
  },
  headerText: {
    fontSize: 44,
    textAlign: 'center',
  },
  plusButton: {
    fontSize: 48,
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

export default observer(TodoList);
