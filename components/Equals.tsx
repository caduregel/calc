import React from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { inputOne as inputOneAtom, inputTwo as inputTwoAtom } from "../Atoms/inputs"
import { whichOperator as whichOperatortAtom, whichInput as whichInputAtom } from "../Atoms/whichnput"
import { answer as answerAtom, answerClicked as answerClickedAtom } from '../Atoms/answer'


function Equals() {

    let [inputOne, setInputOne] = useRecoilState(inputOneAtom)
    let [inputTwo, setInputTwo] = useRecoilState(inputTwoAtom)
    let [whichOperator, setWhichOperator] = useRecoilState(whichOperatortAtom)
    let [, setAnswer] = useRecoilState(answerAtom)
    let [, setAnswerClicked] = useRecoilState(answerClickedAtom)

    let [, setwhichInput] = useRecoilState(whichInputAtom)

    // Do the equation
    const calculation = () => {


        let oneNum = parseInt(inputOne)
        let twoNum = parseInt(inputTwo)

        let sum = oneNum + twoNum
        let minus = oneNum - twoNum

        if (whichOperator == "+") { setAnswer(sum.toString()) }
        else if (whichOperator == "-") { setAnswer(minus.toString()) }


        setAnswerClicked(true)
        setInputOne("")
        setInputTwo("")
        setWhichOperator("")
        setwhichInput(false)
    }

    return (
        <div>
            <li className="keyOperator" onClick={() => { calculation() }}>
                <p className=''>=</p>
            </li>
        </div>
    )
}

export default Equals