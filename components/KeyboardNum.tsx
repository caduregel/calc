import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { inputOne as inputOneAtom, inputTwo as inputTwoAtom } from "../Atoms/inputs"
import { whichInput as whichInputAtom } from "../Atoms/whichnput"
import { answer as answerAtom ,answerClicked as answerClickedAtom} from '../Atoms/answer'

function KeyboardNum(props: any) {

    let keyValue: number = props.keyValue

    let [inputOne, setInputOne] = useRecoilState(inputOneAtom)
    let [inputTwo, setInputTwo] = useRecoilState(inputTwoAtom)
    let [, setAnswer] = useRecoilState(answerAtom)

    const whichInput = useRecoilValue(whichInputAtom)
    const answerClicked = useRecoilValue(answerClickedAtom)




    // Create the first number of the calculation using recoil states
    const newInput = () => {
        // Check which input should be used based on if an operator has been selected
        if (whichInput == false) {
            if (inputOne.length < 4) {
                setInputOne((prevState) => prevState = prevState + keyValue.toString())
            }
        } else if (whichInput == true) {
            if (inputTwo.length < 4) {
                setInputTwo((prevState) => prevState = prevState + keyValue.toString())
                console.log(whichInput)
            }
        }

        // if(answerClicked == true) {
        //     setAnswer("")
        // }

    }

    return (
        <div>
            <li className="keybutton" onClick={() => { newInput() }}>
                <p className=' select-none'>{keyValue.toString()}</p>
            </li>
        </div>
    )
}

export default KeyboardNum