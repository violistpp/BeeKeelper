import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProjectList from './src/screens/ProjectList';

const App = () => {
  return (
    <View style={styles.container}>
      <ProjectList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
