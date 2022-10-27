import React from 'react'
import { useRecoilState } from 'recoil'
import { whichInput as whichInputAtom, whichOperator as whichOperatorAtom} from "../Atoms/whichnput"


function KeyboardOperators() {

    let operator: string = ""

    let [, setWhichInput] = useRecoilState(whichInputAtom)
    let [ , setWhichOperator] = useRecoilState(whichOperatorAtom)


    const setOperator = (props: string) => {
        if (operator == "") {
            operator = props
            setWhichInput(true)
            setWhichOperator(props)
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            {/* Plus Operator */}
            <li className="keyOperator" onClick={() => { setOperator("+") }}>
                <p className=' select-none'>+</p>
            </li>
            {/* Minus Operator */}
            <li className="keyOperator" onClick={() => { setOperator("-") }}>
                <p className=' select-none'>-</p>
            </li>
            {/* product operator */}
            <li className="keyOperator" onClick={() => { setOperator("x") }}>
                <p className=' select-none'>x</p>
            </li>
            {/* division operator */}
            <li className="keyOperator" onClick={() => { setOperator("/") }}>
                <p className=' select-none'>/</p>
            </li>
        </div>
    )
}

export default KeyboardOperators