import {atom} from 'recoil'

export const whichInput = atom({
    key: "whichInput",
    default: false,
})

export const whichOperator = atom({
    key: "whichOperator",
    default: "",
})