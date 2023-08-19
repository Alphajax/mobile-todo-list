import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const ListItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>List Item</Text>
    </View>
  );
};

export default ListItem;
