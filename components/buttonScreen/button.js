import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, Text} from 'react-native';
const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A6A6A6',
    width: 75,
    height: 50,
    margin: 10,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#A6A6A6',
  },
  text: {
    fontSize: 25,
    color: '#202020',
    textAlign: 'center',
    paddingTop: 10,
  },
  zeroButton: {
    backgroundColor: '#A6A6A6',
    width: 175,
    height: 50,
    margin: 10,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#A6A6A6',
  },
  buttonSecondary: {
    backgroundColor: '#a6a6a6',
  },
  buttonAccent: {
    backgroundColor: '#f09a36',
  },
});
export default ({onPress, text, size, theme}) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === 'double') {
    buttonStyles.push(styles.zeroButton);
  }

  if (theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
