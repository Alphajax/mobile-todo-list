import React, {JSX} from 'react';
import {IDescribedListItemProps} from './types';
import {Text, View} from 'react-native';
import styles from './styles';
import {getPriorityNameByKey} from './utils';

const DescribedListItem = ({
  id,
  name,
  description,
  priority,
}: IDescribedListItemProps): JSX.Element => {
  return id ? (
    <View style={styles.itemWrapper}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>
        {description || 'No Description provided'}
      </Text>
      <Text style={styles.priority}>
        Priority: {getPriorityNameByKey(priority || 0)}
      </Text>
    </View>
  ) : (
    <Text>Error</Text>
  );
};

export default DescribedListItem;
