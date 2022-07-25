import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  StyleSheet,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SumArea from './components/sumScreen/sumArea';
import CalculatorButtons from './components/buttonScreen/calculatorButtons';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#202020',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <SumArea />
        <CalculatorButtons />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
export default App;
