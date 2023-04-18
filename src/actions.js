import { createActions } from "redux-actions";

const actions = createActions({
    CAGE : {
        REPLACE_CAGE1 : () => console.log("Meow"),
        REPLACE_CAGE2 : () => console.log("Ssss"),
        REPLACE_CAGE3 : () => console.log("Oooh"),
        REPLACE_CAGE4 : () => console.log("Mooo")
    }
});

export default actions;