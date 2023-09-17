import React, {JSX} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {IListDetailsProps} from './types';
import {observer} from 'mobx-react-lite';
import styles from './styles';
import DescribedListItem from '../../components/DescribedListItem/DescribedListItem';

const ListDetails = ({
  store,
  navigation,
  route,
}: IListDetailsProps): JSX.Element => {
  const id = route.params.id;
  return (
    <View>
      <Text style={styles.header}>TODO Items with Additional info</Text>
      <ScrollView style={styles.todosContainer}>
        {!id ? (
          store.todos.map(todo => <DescribedListItem {...todo} key={todo.id} />)
        ) : (
          <DescribedListItem {...store.todos.find(item => item.id === id)} />
        )}
      </ScrollView>
    </View>
  );
};

export default observer(ListDetails);
