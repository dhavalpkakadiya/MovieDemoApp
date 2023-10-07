import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (key: any, value: any) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {

    }
};
const getData = async (key: any) => {
    try {
        await AsyncStorage.getItem(key);
    } catch (e) {

    }
};

export { saveData, getData }