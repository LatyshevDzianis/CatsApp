import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Container = ({children}) => {
  return (
    <LinearGradient colors={['#ddd6f3', '#faaca8']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default Container;
