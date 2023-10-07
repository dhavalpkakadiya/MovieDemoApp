import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (key: any, value: any) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {

    }
};
const getData = async (key: any) => {
    try {
        const data = await AsyncStorage.getItem(key);
        return data

    } catch (e) {

    }
};

export { saveData, getData }