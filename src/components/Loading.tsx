//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
