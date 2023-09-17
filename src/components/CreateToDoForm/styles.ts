import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  nameInput: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  descriptionInput: {
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  boxStyles: {
    width: 250,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    marginLeft: 12,
  },
  dropdownStyles: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    width: 250,
    marginLeft: 12,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    height: 50,
    width: 150,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default styles;
