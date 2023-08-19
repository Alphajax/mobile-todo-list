import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListItem from '../components/ListItem/ListItem';

const TodoList = () => {
  return (
    <View style={styles.container}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TodoList;
