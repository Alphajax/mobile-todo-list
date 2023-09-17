import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import colors from '../../constants/colors';
import {IListItemProps} from './types';

const ListItem = ({
  todo,
  toggleCompleteToDo,
  showListItemDetails,
}: IListItemProps) => {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={30}
        fillColor={colors.softBlue}
        unfillColor={colors.white}
        iconStyle={{borderColor: colors.softBlue}}
        innerIconStyle={styles.innerIconStyle}
        onPress={() => toggleCompleteToDo(todo.id)}
        isChecked={todo.isCompleted}
      />
      <Pressable onPress={showListItemDetails}>
        <Text style={styles.name}>{todo.name}</Text>
      </Pressable>
    </View>
  );
};

export default ListItem;
