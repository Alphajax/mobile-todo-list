import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useToggle} from 'react-use';
import ListItem from '../../components/ListItem/ListItem';
import {IToDoListProps} from './types';
import CreateToDoModal from '../../components/CreateToDoModal/CreateToDoModal';
import Toast from 'react-native-toast-message';

const TodoList = ({store, navigation}: IToDoListProps) => {
  const [isModalVisible, toggleIsModalVisible] = useToggle(false);

  const showCreateItemError = () => {
    Toast.show({
      type: 'error',
      text1: 'not all required fields are filled',
    });
  };

  const showCreateItemSuccess = () => {
    Toast.show({
      type: 'success',
      text1: 'Successfully create',
    });
  };

  const onQuestionButtonClick = () => {
    navigation.navigate('Details');
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
          />
        ))}
      </ScrollView>
      <CreateToDoModal
        isOpened={isModalVisible}
        toggleModalVisibility={toggleIsModalVisible}
        store={store}
        showCreateItemError={showCreateItemError}
        showCreateItemSuccess={showCreateItemSuccess}
      />
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 560,
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
