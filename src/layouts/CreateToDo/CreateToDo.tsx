import React, {JSX} from 'react';
import {View, Text, Pressable} from 'react-native';
import {ICreateToDoProps} from './types';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import CreateToDoForm from '../../components/CreateToDoForm/CreateToDoForm';

const CreateToDo = ({store, navigation}: ICreateToDoProps): JSX.Element => {
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

  return (
    <View>
      <Pressable onPress={() => navigation.navigate('ToDoList')}>
        <Text>Go To TODo list</Text>
      </Pressable>
      <CreateToDoForm
        store={store}
        showCreateItemSuccess={showCreateItemSuccess}
        showCreateItemError={showCreateItemError}
      />
      <Toast />
    </View>
  );
};

export default CreateToDo;
