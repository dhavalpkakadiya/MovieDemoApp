import store from "./store";
import { MANAGE_THEME } from "./types";

const dispatch = store.dispatch;

export const changeTheme = () => {
    dispatch({ type: MANAGE_THEME })
}