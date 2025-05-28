import React, {useState} from 'react';
import {SafeAreaView, View, Text, Switch, StyleSheet} from 'react-native';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };

  const backGroundStyle = isDarkMode
    ? styles.darkBackground
    : styles.lightBackground;
  const textStyle = isDarkMode ? styles.darkModeText : styles.lightModeText;

  return (
    <SafeAreaView style={[styles.container, backGroundStyle]}>
      <Text style={textStyle}>
        {isDarkMode ? 'Dark Mod Açık' : 'Dark Mod Kapalı'}{' '}
      </Text>
      <Switch value={isDarkMode} onValueChange={toggleSwitch} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkBackground: {
    backgroundColor: '#000',
  },
  darkModeText: {
    color: 'white',
  },
});
export default App;
