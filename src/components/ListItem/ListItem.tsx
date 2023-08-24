import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import colors from '../../constants/colors';

const ListItem = () => {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={30}
        fillColor={colors.softBlue}
        unfillColor={colors.white}
        iconStyle={{borderColor: colors.softBlue}}
        innerIconStyle={styles.innerIconStyle}
        onPress={(isChecked: boolean) => {
          console.log(isChecked);
        }}
      />
      <Text style={styles.name}>List Item</Text>
    </View>
  );
};

export default ListItem;
