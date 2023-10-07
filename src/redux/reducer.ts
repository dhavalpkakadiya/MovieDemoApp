import { blackTheme, blueTheme } from "../theme/colors";
import { MANAGE_THEME } from "./types";

const instialState = {
    theme: blackTheme,
    isBlackTheme: true
};

export const ThemeReducer = (state = instialState, action: any) => {
    switch (action.type) {
        case MANAGE_THEME:
            return { ...state, theme: state?.isBlackTheme ? blueTheme : blackTheme, isBlackTheme: !state?.isBlackTheme };
        default:
            return state;
    }
};