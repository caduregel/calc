import {atom} from 'recoil'

// Atom for the first value of the calculation
export const inputOne = atom({
    key: "inputOne",
    default: "",
})

export const inputTwo = atom({
    key: "inputTwo",
    default: "",
})