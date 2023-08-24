import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ListItem from '../components/ListItem/ListItem';

const TodoList = () => {
  return (
    <ScrollView style={styles.container}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TodoList;
