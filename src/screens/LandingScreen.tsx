import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Loading from '../components/Loading';
import {useSelector} from 'react-redux';
import {getData} from '../storage/storage';
import {useNavigation} from '@react-navigation/native';

const LandingScreen = () => {
  const {theme} = useSelector((state: any) => state.theme);
  const navigation: any = useNavigation();
  const manageSession = async () => {
    const name = await getData('user-name');
    if (name) {
      navigation?.navigate('HomeScreen');
    } else {
      navigation?.navigate('LoginScreen');
    }
  };
  useEffect(() => {
    manageSession();
  }, []);
  return (
    <View style={[styles.container, {backgroundColor: theme.bgColor}]}>
      <Loading />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LandingScreen;
