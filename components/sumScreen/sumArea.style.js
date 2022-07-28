import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#999',
  },
  sumArea: {
    flex: 1,
    backgroundColor: '#999',
    height: 70,
  },
  sumText: {
    fontSize: 45,
    fontWeight: 'bold',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  prevInput: {
    flex: 3,
    backgroundColor: '#566471',
    height: 70,
    marginTop: 20,
  },
  operatorText: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    right: 5,
  },
});
