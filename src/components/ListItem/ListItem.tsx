import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import colors from '../../constants/colors';
import {IListItemProps} from './types';

const ListItem = ({todo, toggleCompleteToDo}: IListItemProps) => {
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
      <Text style={styles.name}>{todo.name}</Text>
    </View>
  );
};

export default ListItem;
