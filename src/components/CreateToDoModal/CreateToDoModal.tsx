import React, {useState} from 'react';
import {Modal, Pressable, Text, TextInput, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {ICreateToDoModalProps} from './types';
import styles from './styles';

const CreateToDoModal = ({
  isOpened,
  toggleModalVisibility,
  store,
}: ICreateToDoModalProps): JSX.Element => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
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
              data={[
                {
                  key: 0,
                  value: 'high',
                },
                {
                  key: 1,
                  value: 'medium',
                },
                {
                  key: 2,
                  value: 'low',
                },
              ]}
              setSelected={setPriority}
            />
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              toggleModalVisibility(!isOpened);
              store.createToDo({
                id: `${new Date().getTime()}`,
                name,
                description,
                priority: +priority,
                isCompleted: false,
              });
            }}>
            <Text style={styles.textStyle}>Save</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CreateToDoModal;
