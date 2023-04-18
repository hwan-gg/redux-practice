import { createActions } from "redux-actions";

const actions = createActions({
    CAGE : {
        REPLACE_CAGE1 : (animal) => {
            if(animal === "🐈") {
                console.log("Meow");
                return "🐅";
            } else {
                console.log("Roar");
                return "🐈";
            }
    },
        REPLACE_CAGE2 : (animal) => {
            if(animal === "🐍") {
                console.log("Ssss");
                return "🐉";
            } else {
                console.log("Rawr");
                return "🐍";
            }
    },
        REPLACE_CAGE3 : (animal) => {
            if(animal === "🐒") {
                console.log("Oooo");
                return "🦍";
            } else {
                console.log("Oooh");
                return "🐒";
            }
    },
        REPLACE_CAGE4 : (animal) => {
            if(animal === "🐄") {
                console.log("Mooo");
                return "🐃";
            } else {
                console.log("MMoo");
                return "🐄";
            }
        }
    }
});

export default actions;