/*
export const setAuthState = (state, newState) => {
    state.authState = newState
};

*/

import { setReactiveStateValue } from "../../helperFunctions";

export const setSiteSettings = (state, settingsObject) => {
	// console.log(settingsObject);
	Object.keys(settingsObject).forEach(key => {
		setReactiveStateValue(state.siteSettings,key,settingsObject[key])
	});
};

