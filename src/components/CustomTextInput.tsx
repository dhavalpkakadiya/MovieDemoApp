import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../theme/constant';

type Props = {
  onChangeText: (text: string) => void;
  placeholder?: string;
  value?: string;
  isPassword?: boolean;
};

const CustomTextInput = (props: Props) => {
  const {onChangeText, placeholder, value, isPassword} = props;
  const [isShownPassword, setIsShownPassword] = useState(isPassword);

  return (
    <View
      style={{
        borderWidth: 1,
        width: wp(90),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'black'}
        style={styles.TextInput}
        onChangeText={onChangeText}
        secureTextEntry={isShownPassword}
      />
      {isPassword && (
        <Text
          onPress={() => {
            setIsShownPassword(!isShownPassword);
          }}
          style={{marginRight: 7}}>
          {isShownPassword ? 'Show' : 'Hide'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    flex: 1,
    borderColor: 'black',
    borderRadius: 10,
    height: hp(6),
    paddingLeft: 10,
    color: 'black',
  },
});

export default CustomTextInput;
