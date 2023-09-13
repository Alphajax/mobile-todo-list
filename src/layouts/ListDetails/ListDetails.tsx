import React, {JSX} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {IListDetailsProps} from './types';
import {observer} from 'mobx-react-lite';
import styles from './styles';
import DescribedListItem from '../../components/DescribedListItem/DescribedListItem';

const ListDetails = ({store, navigation}: IListDetailsProps): JSX.Element => {
  return (
    <View>
      <Text style={styles.header}>TODO Items with Additional info</Text>
      <ScrollView style={styles.todosContainer}>
        {store.todos.map(todo => (
          <DescribedListItem {...todo} />
        ))}
      </ScrollView>
    </View>
  );
};

export default observer(ListDetails);
