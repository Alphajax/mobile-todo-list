import React, {useEffect, useState} from 'react';
import {Modal, Pressable, Text, TextInput, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {ICreateToDoModalProps} from './types';
import styles from './styles';
import {IToDo} from '../../types/ToDoList/ToDoList.types';
import {selectListData} from './constants';

const CreateToDoModal = ({
  isOpened,
  toggleModalVisibility,
  store,
  showCreateItemError,
  showCreateItemSuccess,
}: ICreateToDoModalProps): JSX.Element => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    if (!isOpened) {
      setName('');
      setDescription('');
      setPriority('');
    }
  }, [isOpened]);

  const vlidateItemBeforeCreate = (item: Partial<IToDo>): boolean => {
    if (!item.name || !item.id || !item.priority) {
      return false;
    }
    return true;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpened}
      onRequestClose={() => {
        toggleModalVisibility(!isOpened);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <TextInput
              value={name}
              onChangeText={setName}
              numberOfLines={1}
              style={styles.nameInput}
              placeholder="Task Name"
              editable
            />
          </View>
          <View>
            <TextInput
              value={description}
              onChangeText={setDescription}
              numberOfLines={5}
              multiline
              placeholder="Additional information (optional)"
              style={styles.descriptionInput}
              maxLength={350}
            />
          </View>

          <View>
            <SelectList
              boxStyles={styles.boxStyles}
              dropdownStyles={styles.dropdownStyles}
              data={selectListData}
              setSelected={setPriority}
            />
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              toggleModalVisibility(!isOpened);
              const itemToBeCreated = {
                id: `${new Date().getTime()}`,
                name,
                description,
                priority: +priority,
                isCompleted: false,
              };
              vlidateItemBeforeCreate(itemToBeCreated)
                ? (store.createToDo(itemToBeCreated), showCreateItemSuccess())
                : showCreateItemError();
            }}>
            <Text style={styles.textStyle}>Save</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CreateToDoModal;
