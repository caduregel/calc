import React from 'react'
import { inputOne as inputOneAtom, inputTwo as inputTwoAtom, } from "../Atoms/inputs"
import { whichOperator as whichOperatorAtom } from '../Atoms/whichnput'
import { answer as answerAtom } from '../Atoms/answer'
import { useRecoilValue } from 'recoil'

function Display() {
  let inputOne = useRecoilValue(inputOneAtom)
  let inputTwo = useRecoilValue(inputTwoAtom)
  let whichOperator = useRecoilValue(whichOperatorAtom)
  let answer = useRecoilValue(answerAtom)

  return (
    <div className=' bg-gray-800 dark:bg-white dark:text-black shadow-xl text-white w-64 h-11 rounded-lg text-lg flex items-center'>
      <p className=' m-1'>{inputOne} {whichOperator} {inputTwo}</p>
        <p>{answer}</p>
    </div>
  )
}

export default Display