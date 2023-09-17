import React, {JSX, useState} from 'react';
import {View, TextInput, Pressable, Text} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {IToDo} from '../../types/ToDoList/ToDoList.types';
import styles from './styles';
import {selectListData} from './constants';
import {ICreateToDoFormProps} from './types';

const CreateToDoForm = ({
  store,
  showCreateItemError,
  showCreateItemSuccess,
}: ICreateToDoFormProps): JSX.Element => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const vlidateItemBeforeCreate = (item: Partial<IToDo>): boolean => {
    if (!item.name || !item.id || !item.priority) {
      return false;
    }
    return true;
  };

  return (
    <View>
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
  );
};

export default CreateToDoForm;
