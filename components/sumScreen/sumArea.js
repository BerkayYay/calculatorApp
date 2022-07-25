import {Text, View} from 'react-native';
import sumAreaStyle from './sumArea.style';
import React from 'react';
function SumArea() {
  return (
    <View style={sumAreaStyle.container}>
      <View style={sumAreaStyle.sumArea}>
        <Text style={sumAreaStyle.sumText}>0</Text>
      </View>
    </View>
  );
}

export default SumArea;
