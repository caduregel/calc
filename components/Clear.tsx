import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { inputOne as inputOneAtom, inputTwo as inputTwoAtom } from "../Atoms/inputs"
import { whichOperator as whichOperatortAtom, whichInput as whichInputAtom } from "../Atoms/whichnput"
import { answer as answerAtom } from '../Atoms/answer'


function Clear() {

    let [, setInputOne] = useRecoilState(inputOneAtom)
    let [, setInputTwo] = useRecoilState(inputTwoAtom)
    let [, setWhichOperator] = useRecoilState(whichOperatortAtom)
    let [, setAnswer] = useRecoilState(answerAtom)

    let [ , setWhichInput ] = useRecoilState(whichInputAtom)

    // Reset all values to default
    const clearCalc = () => {
        setInputOne("")
        setInputTwo("")
        setWhichOperator("")
        setWhichInput(false)
        setAnswer("")
    }

    return (
        <div>
            <li className="bg-zinc-500 rounded-lg shadow-xl h-20 w-20 text-xl hover:cursor-pointer flex justify-center items-center" onClick={() => { clearCalc() }}>
                <p className=''>clear</p>
            </li>
        </div>
    )
}

export default Clear