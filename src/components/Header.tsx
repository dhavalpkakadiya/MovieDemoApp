import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../theme/constant';
import icons from '../helper/icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {changeTheme} from '../redux/action';
import {useSelector} from 'react-redux';
import {blackTheme, blueTheme} from '../theme/colors';

type Props = {
  onLeftPress?: () => void;
  onRightPress?: () => void;
  title?: string | null | undefined;
  right?: boolean;
  rightText?: boolean;
  left?: boolean;
  isSwitch?: boolean;
};

const Header = (props: Props) => {
  const {theme, isBlackTheme} = useSelector((state: any) => state.theme);
  const {title, right, left, onRightPress, isSwitch} = props;
  const navigation: any = useNavigation();

  return (
    <>
      <SafeAreaView />
      <View style={{...styles.mainContainer, backgroundColor: theme?.bgColor}}>
        <View style={{width: '20%', alignItems: 'flex-start'}}>
          {right ? (
            <TouchableOpacity onPress={onRightPress}>
              <Image source={icons.back} style={styles.backbutton} />
            </TouchableOpacity>
          ) : isSwitch ? (
            <TouchableOpacity
              onPress={() => {
                changeTheme();
              }}
              style={{
                height: 28,
                width: 48,
                backgroundColor: 'white',
                borderRadius: 30,
                justifyContent: 'center',
                paddingHorizontal: 2,
                alignItems: isBlackTheme ? 'flex-start' : 'flex-end',
              }}>
              <View
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 12,
                  backgroundColor: isBlackTheme
                    ? blueTheme.bgColor
                    : blackTheme.bgColor,
                }}></View>
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={{width: '60%', alignItems: 'center'}}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
        <View style={{width: '20%', alignItems: 'flex-end'}}>
          {left && (
            <Text
              onPress={() => {
                Alert.alert('Are You sure', 'It will end your sessoin...!', [
                  {text: 'CANCEL'},
                  {
                    text: 'CONFIRM',
                    onPress: () => {
                      AsyncStorage.clear();
                      navigation.navigate('LoginScreen');
                    },
                  },
                ]);
              }}
              style={styles.titleStyle}>
              Logout
            </Text>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: hp(1.8),
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  titleStyle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
  },
  backbutton: {
    height: hp(3),
    width: wp(6),
    tintColor: '#FFF',
  },
});

export default Header;
