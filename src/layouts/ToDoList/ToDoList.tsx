import React, {useEffect} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useToggle} from 'react-use';
import ListItem from '../../components/ListItem/ListItem';
import {IToDoListProps} from './types';
import CreateToDoModal from '../../components/CreateToDoModal/CreateToDoModal';
import Toast from 'react-native-toast-message';

const TodoList = ({store, navigation}: IToDoListProps) => {
  const [isModalVisible, toggleIsModalVisible] = useToggle(false);

  const onQuestionButtonClick = () => {
    navigation.navigate('Details');
  };

  useEffect(() => {
    isModalVisible
      ? navigation.navigate('Create')
      : navigation.navigate('ToDoList');
  }, [isModalVisible]);

  const showListItemDetails = (id: string) => {;
    navigation.navigate('Details', {id, store});
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Active tasks</Text>
        </View>
        <View style={styles.plusButtonContainer}>
          <Pressable onPress={onQuestionButtonClick}>
            <Text style={styles.plusButton}>?</Text>
          </Pressable>
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
            showListItemDetails={() => showListItemDetails(todo.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
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
