import React, {JSX} from 'react';
import {Text, View} from 'react-native';
import {IListDetailsProps} from './types';
import {observer} from 'mobx-react-lite';

const ListDetails = ({store, navigation}: IListDetailsProps): JSX.Element => {
  return (
    <View>
      <Text>hi barbie</Text>
    </View>
  );
};

export default observer(ListDetails);
