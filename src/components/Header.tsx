import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { hp, wp } from '../theme/constant'
import icons from '../helper/icons'
import colors from '../theme/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

type Props = {
    onLeftPress?: () => void
    onRightPress?: () => void
    title?: string
    right?: boolean
    rightText?: boolean
    left?: boolean
    isSwitch?: boolean
    themeColor?: string
    onChangeThemeColor?: () => null
}

const Header = (props: Props) => {

    const { title, right, left, onRightPress, isSwitch,themeColor,onChangeThemeColor } = props;
    const navigation = useNavigation();
    const [switchValue, setSwith] = useState(true);

    return (
        <>
            <SafeAreaView />
            <View style={{...styles.mainContainer,backgroundColor:themeColor}}>
                <View style={{ width: "20%", alignItems: 'flex-start' }}>
                    {right ?
                        <TouchableOpacity onPress={onRightPress} >
                            <Image source={icons.back} style={styles.backbutton} />
                        </TouchableOpacity> :
                        isSwitch ? <TouchableOpacity onPress={() =>{
                            onChangeThemeColor();
                            setSwith(!switchValue)

                        }} style={{ height: 28, width: 48, backgroundColor: 'white', borderRadius: 30, justifyContent: 'center', paddingHorizontal: 2 , alignItems: switchValue ?'flex-start':'flex-end'}}>
                            <View style={{ height: 24, width: 24, borderRadius: 12, backgroundColor:switchValue ? "#1484CD": 'black' }}></View>
                        </TouchableOpacity>

                            : null
                    }
                </View>
                <View style={{ width: "60%", alignItems: 'center' }}>
                    <Text style={styles.titleStyle}>{title}</Text>
                </View>
                <View style={{ width: "20%", alignItems: "flex-end" }}>
                    {left &&
                        <Text onPress={() => {
                            AsyncStorage.clear();
                            navigation.navigate("LoginScreen")
                        }} style={styles.titleStyle}>Logout</Text>}
                </View>
            </View>
        </>
    )
}



const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        width: '100%',
        paddingVertical: hp(1.8),
        justifyContent: 'space-between',
        paddingHorizontal: wp(4),
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    titleStyle: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '700',
    },
    backbutton: {
        height: hp(3),
        width: wp(6),
        tintColor: colors.white
    },
    droDownView: {
        position: 'absolute',
        top: 30
    },
    closeIcon: {
        height: 10,
        width: 10,
        marginTop: 5,
        marginRight: 5,
        backgroundColor: "red"
    },
    headerIcon: {
        alignSelf: 'flex-end',
        paddingTop: 3,
        paddingRight: 3,
    },
    dropDownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    dropDownItemText: {
        fontSize: 14,
        fontWeight: '300',
        paddingRight: 20,
        paddingLeft: 5,
    },
    dropDown: {
        borderRadius: 5,
        backgroundColor: '#DCDFEA',
        shadowOpacity: 0.2,
        elevation: 1,
        shadowOffset: { width: -3, height: 3 },
        shadowRadius: 5,
        zIndex: 1,
    },
})

export default Header