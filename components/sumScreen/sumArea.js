import {Text, View} from 'react-native';
import sumAreaStyle from './sumArea.style';
import React from 'react';
import {useSelector} from 'react-redux';

function SumArea() {
  const input = useSelector(state => state.counter.input);
  const previousInput = useSelector(state => state.counter.previousInput);
  return (
    <View style={sumAreaStyle.container}>
      <View style={sumAreaStyle.prevInput}>
        <Text style={sumAreaStyle.sumText}>{previousInput}</Text>
      </View>
      <View style={sumAreaStyle.sumArea}>
        <Text style={sumAreaStyle.sumText}>{input}</Text>
      </View>
    </View>
  );
}

export default SumArea;
