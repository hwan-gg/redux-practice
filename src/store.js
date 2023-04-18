import typeToReducer from "type-to-reducer";
import actions from "./actions.js";

export const initialState = {
    cage1 : "🐈",
    cage2 : "🐍",
    cage3 : "🐒",
    cage4 : "🐄"
};

const reducer = typeToReducer({
    [actions.cage.replaceCage1] : (state, action) => {
        return {
            ...state,
            cage1 : action.payload,
        };
    },
    [actions.cage.replaceCage2] : (state, action) => {
        return {
            ...state,
            cage2 : action.payload,
        };
    },
    [actions.cage.replaceCage3] : (state, action) => {
        return {
            ...state,
            cage3 : action.payload,
        };
    },
    [actions.cage.replaceCage4] : (state, action) => {
        return {
            ...state,
            cage4 : action.payload,
        };
    },
}, initialState);

export default reducer;