import { atom } from "recoil";

export const answer = atom({
    key: "answer",
    default: "",
})

export const answerClicked = atom({
    key: "answerClicked",
    default: false,
})