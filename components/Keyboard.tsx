import React from 'react'
import KeyboardNum from './KeyboardNum'
import KeyboardOperators from './KeyboardOperators'
import Equals from './equals'
import Clear from './Clear'

function Keyboard() {
    return (
        <div className=''>
            <div className='flex gap-4'>
                <ul className='text-black grid gap-4 grid-cols-3 grid-rows-4'>
                    <KeyboardNum keyValue={1}/>
                    <KeyboardNum keyValue={2}/>
                    <KeyboardNum keyValue={3}/>
                    <KeyboardNum keyValue={4}/>
                    <KeyboardNum keyValue={5}/>
                    <KeyboardNum keyValue={6}/>
                    <KeyboardNum keyValue={7}/>
                    <KeyboardNum keyValue={8}/>
                    <KeyboardNum keyValue={9}/>
                    <Clear />
                    <KeyboardNum keyValue={0}/>
                    <Equals />
                </ul>
                <ul className='text-black grid gap-4 grid-cols-1 grid-rows-1'>
                    <KeyboardOperators />
                </ul>
            </div>
        </div>
    )
}

export default Keyboard