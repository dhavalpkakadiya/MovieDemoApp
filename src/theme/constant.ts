import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";


export function hp(params: number) {
    return heightPercentageToDP(params)
}

export function wp(params: number) {
    return widthPercentageToDP(params)
}