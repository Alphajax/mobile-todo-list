import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  itemWrapper: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.softBlue,
    padding: 5,
  },
  name: {
    fontSize: 25,
    color: colors.burntSienna,
  },
  description: {
    fontSize: 21,
    color: colors.burntSienna,
  },
  priority: {
    fontSize: 23,
    color: colors.burntSienna,
  },
});

export default styles;
