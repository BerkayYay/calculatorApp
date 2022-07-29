import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setInput, clear, setOperator, handleEqual} from '../../redux/reducers';
import Button from './button';

export default function CalculatorButtons() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => dispatch(clear())}
          text="C"
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(setOperator('+/-'))}
          text="+/-"
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(setOperator('%'))}
          text="%"
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(setOperator('/'))}
          text="/"
          theme={'accent'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => dispatch(setInput('7'))}
          text="7"
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(setInput('8'))}
          text="8"
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(setInput('9'))}
          text="9"
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(setOperator('x'))}
          text="x"
          theme={'accent'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => dispatch(setInput('4'))}
          text="4"
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(setInput('5'))}
          text="5"
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(setInput('6'))}
          text="6"
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(setOperator('-'))}
          text="-"
          theme={'accent'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => dispatch(setInput('1'))}
          text="1"
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(setInput('2'))}
          text="2"
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(setInput('3'))}
          text="3"
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(setOperator('+'))}
          text="+"
          theme={'accent'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => dispatch(setInput('0'))}
          text="0"
          theme={'secondary'}
          size={'double'}
        />
        <Button
          onPress={() => dispatch(setInput('.'))}
          text="."
          theme={'secondary'}
        />
        <Button
          onPress={() => dispatch(handleEqual('='))}
          text="="
          theme={'accent'}
        />
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
});
