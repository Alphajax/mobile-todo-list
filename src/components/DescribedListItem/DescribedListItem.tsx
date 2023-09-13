import React, {JSX} from 'react';
import {IDescribedListItemProps} from './types';
import {Text, View} from 'react-native';
import styles from './styles';

const DescribedListItem = ({
  name,
  description,
  priority,
}: IDescribedListItemProps): JSX.Element => {
  return (
    <View style={styles.itemWrapper}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>
        {description || 'No Description provided'}
      </Text>
      <Text style={styles.priority}>{priority}</Text>
    </View>
  );
};

export default DescribedListItem;
