import typeToReducer from "type-to-reducer";
import actions from "./actions.js";

export const initialState = {
    cage1 : "🐈",
    cage2 : "🐍",
    cage3 : "🐒",
    cage4 : "🐄"
};

const reducer = typeToReducer({
    [actions.cage.replaceCage1] : (state) => {
        return {
            ...state,
            cage1 : "🐅",
        };
    },
    [actions.cage.replaceCage2] : (state) => {
        return {
            ...state,
            cage2 : "🐉",
        };
    },
    [actions.cage.replaceCage3] : (state) => {
        return {
            ...state,
            cage3 : "🦍",
        };
    },
    "REPLACE_CAGE4" : (state) => {
        return {
            ...state,
            cage4 : "🐃",
        };
    },
}, initialState);

export default reducer;