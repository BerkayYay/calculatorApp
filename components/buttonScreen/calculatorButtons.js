import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

function buttons({bt1, bt2, bt3, bt4}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{bt1}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{bt2}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{bt3}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText}>{bt4}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default function CalculatorButtons() {
  return (
    <View style={styles.container}>
      {buttons({bt1: 'C', bt2: '%', bt3: '+/-', bt4: '/'})}
      {buttons({bt1: '7', bt2: '8', bt3: '9', bt4: '*'})}
      {buttons({bt1: '4', bt2: '5', bt3: '6', bt4: '-'})}
      {buttons({bt1: '1', bt2: '2', bt3: '3', bt4: '+'})}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.zeroButton}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#202020',
    paddingTop: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#A6A6A6',
    width: 75,
    height: 75,
    padding: 10,
    margin: 10,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#A6A6A6',
  },
  button2: {
    backgroundColor: '#F09A36',
    width: 75,
    height: 75,
    padding: 10,
    margin: 10,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#F09A36',
  },
  buttonText: {
    fontSize: 25,
    color: '#202020',
    textAlign: 'center',
    paddingTop: 10,
  },
  zeroButton: {
    backgroundColor: '#A6A6A6',
    width: 175,
    height: 75,
    padding: 10,
    margin: 10,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#A6A6A6',
  },
});
